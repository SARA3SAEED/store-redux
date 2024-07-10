import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// import { v4 as uuid } from 'uuid';
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Nav";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    getProductsAndUser();
  }, []);

  const getProductsAndUser = () => {
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}`)
      .then(function (res) {
        setUser(res.data);
        setIsLoading(false);
      });
  }

  const decreseQuantity = (quantityValue , thisItem ) => {
    if(quantityValue>1) {
    const arr = user.cart.filter(item => item.id!==thisItem.id)
    thisItem.quantity = parseInt(quantityValue)-1
      arr.push(thisItem)

    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: arr
    }).then(function(){
      setIsLoading(false)
    })
   } 
  }

  const increaseQuantity = (quantityValue , thisItem ) => {
    const arr = user.cart.filter(item => item.id !== thisItem.id)
    thisItem.quantity = parseInt(quantityValue)+1
    arr.push(thisItem)
    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: arr
    }).then(function(){
      setIsLoading(false)
    })

  }

  const handleClick = (thisItem) => {
    const arr = user.cart.filter(item => item.id !== thisItem.id)
    setUser({...user , cart:arr})
    console.log(arr);
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: arr
    }).then(function(res){
      console.log(res.data);
      setIsLoading(false)
    })
  }

  return (
    !isLoading && (
      <div className="flex flex-col min-h-screen w-full">
        <Nav />
      {user.cart.length==0 ?
      <div className="flex justify-center items-center m-auto ">
        <div className="flex justify-center items-center m-auto w-96 p-6 bg-white border
         border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5  className="flex justify-center items-center m-auto m-auto bg-clip-text text-transparent 
      bg-gradient-to-r from-yellow-400 to-orange-500 h-28 mb-2 text-2xl font-bold
      tracking-tight text-gray-900 ">
      Sorry, no items in the cart
      </h5>
      </div>
      </div>
       :
        <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-8
         ">
          <div className="flex items-center justify-between mb-4 ml-3">
            <h2 className="text-xl font-bold leading-none text-gray-900 ">
            Product Name </h2>
            <h2 className="text-xl font-bold text-gray-900  hover:underline " >
            Price </h2>
            <h2 className="text-xl font-bold text-gray-900  hover:underline " >
              Guantity </h2>
            <h2 className="text-xl font-bold text-gray-900  hover:underline " >
              Total</h2>
          </div>
          <hr />




          {user.cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 ">
                    <div className="flex w-40">
                    <img
                      className="w-12 h-12 rounded "
                      src={item.item.images[0]}
                    />
                    <p className="ml-4  inline-flex items-center text-base font-semibold text-gray-900">
                    {item.item.title}
                    </p>
                    </div>
                    <p className=" inline-flex items-center justify-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.item.price}
                    </p>

                    <div className="flex ">
                    <button className="w-4 h-6 mt-2  lg:w-8 lg:h-8 border border-gray-300" onClick={()=> decreseQuantity(item.quantity , item )}>-</button>
                    <p className="m-2 lg:mt-3 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.quantity}
                    </p>
                    <button className="w-4 h-6 mt-2 lg:w-8 lg:h-8 border border-gray-300" onClick={()=> increaseQuantity(item.quantity , item )}>+</button>
                    </div>
                   
                 
                    <p className="ml-2 inline-flex items-center text-base font-semibold text-gray-900">
                    {parseInt(item.quantity) * parseInt(item.item.price)}
                    <svg role="button" onClick={()=>handleClick(item)} 
                    className="w-6 h-6 text-gray-800 m-auto  auto-cols-fr" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                    width="8" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="red" strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                    </p>
                    
                  </div>
                  
                     ))}
                  <hr />
                  <div className="flex items-center justify-center m-3">
                
                  <button
                            onClick={()=>navigate('/Pay')} 
                            className="mb-3 inline-block w-44 lg:w-72 rounded px-6 pb-2 pt-2.5 text-xs 
                            font-medium uppercase leading-normal text-white shadow-dark-3 transition 
                            duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 
                            focus:outline-none focus:ring-0 active:shadow-dark-2"
                            type="button"
                            data-twe-ripple-init=""
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #FDC830, #F37335)"
                            }}
                          >
                            Check out
                          </button>
                          </div>
          </div>}
      </div>
    )
  );
}
