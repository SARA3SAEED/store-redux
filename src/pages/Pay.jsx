import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";

export default function Pay() {
  // use states
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");

  // other varibles
  const navigate = useNavigate();

  // use effect
  useEffect(() => {
    getUser();
  }, []);

  // functions
  const getUser = () => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
        setAddress(res.data.address);
        const sum = res.data.cart.reduce(
          (acc, curr) => acc + curr.item.price * curr.quantity,
          0
        );
        setTotal(sum);

        // setTotal(total)
        setIsLoading(false);
      });
  };
  const checkout = () => {
    if (address.length <= 3) {
      toast.error("You must add adress first");
    } else {
      const newShipment = {
        shipmentId: uuid(),
        shipmentDetailes: user.cart,
        total: total,
        date: new Date(),
      };
      const arr = user.oldShipments;
      arr.push(newShipment);
      setUser({ ...user, oldShipments: arr });
      axios
        .put(
          `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
            "id"
          )}`,
          {
            oldShipments: arr,
            cart: [],
            address: address,
          }
        )
        .then(function () {
          console.log("sucess");
          navigate("/allOrders");
        });
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col min-h-screen items-center gap-4">
      <Nav />

      <h1 className="p-2 font-bold mb-2 text-2xl tracking-tight text-amber-400">
        Your Order{" "}
      </h1>
      <div className="flex flex-row justify-between items-center p-4 w-2/3 max-sm:w-full rounded-md  mb-2 text-2xl tracking-tight text-amber-500 px-9">
        <h1>product</h1>
        <h1>price</h1>
      </div>
      {user.cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center p-4 border w-2/3 max-sm:w-full rounded-md "
        >
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-20 self-center"
              src={item.item.images[0]}
              alt={item.item.title}
            />
            <h1 className="text-center">{item.item.title}</h1>
          </div>

          <h1 className=" auto-cols-fr text-center">
            {parseInt(item.quantity) * parseFloat(item.item.price)}$
          </h1>
        </div>
      ))}

      <h1 className="text-end w-2/3 max-sm:w-full ">
        <span className="font-bold text-2xl text-amber-400">Total </span>
        {total.toFixed(2)}$
      </h1>

      {/* Billing address form */}

      {/* 
//         <div className='flex flex-col gap-2 w-2/3 max-sm:w-full items-start justify-center p-2'>
//           <h1>Billing address</h1>
            
//           <div className="form-control w-full">
//           <label className="label">
//               <span className="label-text">Address</span>
//           </label>
//           <input 
//           value={user.address}
//           onChange={(e)=>setUser({...user,address:e.target.value})} 
//           type="text" 
//           placeholder="1234 Main st, City, Country" 
//           className="input input-bordered placeholder-primary" 
//           required />
//           </div>
//           <h1>Payment</h1>
            
//           <div className="form-control w-full">
//           <label className="label">
//               <span className="label-text">Name on Card</span>
//           </label>
//           <input 
//           // value="" 
//           // onChange={(e)=>setUserData({...userData,username:e.target.value})} 
//           type="text" 
//           placeholder="full name" 
//           className="input input-bordered placeholder-primary" 
//           required />
//           </div>

//           <div className="form-control w-full">
//           <label className="label">
//               <span className="label-text">Credit Card Number</span>
//           </label>
//           <input 
//           // value="" 
//           // onChange={(e)=>setUserData({...userData,username:e.target.value})} 
//           type="text" 
//           placeholder="1234 1234 1234 1234" 
//           className="input input-bordered placeholder-primary" 
//           required />
//           </div>

//           <div className='flex flex-row items-center w-full gap-2'>

//             <div className="form-control w-full">
//             <label className="label">
//                 <span className="label-text">Expiration</span>
//             </label>
//             <input 
//             // value="" 
//             // onChange={(e)=>setUserData({...userData,username:e.target.value})} 
//             type="text" 
//             placeholder="MM/YY" 
//             className="input input-bordered placeholder-primary" 
//             required />
//             </div>

//             <div className="form-control w-full">
//             <label className="label">
//                 <span className="label-text">CVC</span>
//             </label>
//             <input 
//             // value="" 
//             // onChange={(e)=>setUserData({...userData,username:e.target.value})} 
//             type="text" 
//             placeholder="CVC" 
//             className="input input-bordered placeholder-primary" 
//             required />
//             </div>
//           </div>


//         </div> */}

      <form className="w-[66%] my-8 border border-gray-300 rounded p-8">
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
       border-gray-300 appearance-none
         focus:outline-none focus:ring-0  focus:border-amber-300 peer"
            id="floating_email"
            name="floating_email"
            placeholder=" Address"
            required
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
      border-0 border-b-2 border-gray-300 appearance-none 
       focus:outline-none focus:ring-0
        focus:border-amber-300 peer"
            id="floating_name"
            name="floating_name"
            placeholder="Your Name on Card"
            required
            type="text"
            // value=""
            // onChange={(e)=>setUserData({...userData,username:e.target.value})}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
      border-0 border-b-2 border-gray-300 appearance-none focus:outline-none 
      focus:ring-0  focus:border-amber-300 peer"
            id="floating_repeat_password"
            name="repeat_password"
            placeholder="Credit Card Number"
            required
            type="text"
            // value=""
            // onChange={(e)=>setUserData({...userData,username:e.target.value})}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
        border-0 border-b-2 border-gray-300 appearance-none   
        focus:outline-none focus:ring-0  focus:border-amber-300 peer"
              id="floating_first_name"
              name="floating_first_name"
              placeholder="Expiration"
              required
              type="text"
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none 
       focus:outline-none focus:ring-0  focus:border-amber-300 peer"
              id="floating_last_name"
              name="floating_last_name"
              placeholder="cvv "
              required
              type="text"
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none
      focus:outline-none focus:ring-0  focus:border-amber-300 peer"
              id="floating_phone"
              name="floating_phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="1234 Main st, "
              required
              type="text"
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none  
       focus:outline-none focus:ring-0 focus:border-amber-300 peer"
              id="floating_company"
              name="floating_company"
              placeholder=" State, Country"
              required
              type="text"
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            onClick={() => checkout()}
            className="mx-2 text-white bg-primary hover:bg-amber-400 focus:ring-4 focus:outline-none 
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <button
            style={{
              background: "linear-gradient(to right, #FDC830, #F37335)",
            }}
            className="mx-2 bg-primary text-white rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={() => navigate("/cart")}
          >
            back to cart
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        stacked
      />
      <Footer />
    </div>
  );
}
