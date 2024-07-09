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

  

  useEffect(() => {
    getProductsAndUser();
  }, []);

  const getProductsAndUser = () => {
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}`)
      .then(function (res) {
        setUser(res.data);
        setProduct(res.data.cart);
        setIsLoading(false);
      });
  }

  const decreseQuantity = (quantityValue , thisItem) => {

    const tempObjectHandling = user.cart.find(item => item.id == thisItem.id )
    const arr = user.cart
    arr.pop(tempObjectHandling)
    tempObjectHandling.quantity = parseInt(quantityValue)-1
    arr.push(tempObjectHandling)
    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: user.cart
    }).then(function(){
      setIsLoading(false)
    })

  }

  const increaseQuantity = (quantityValue , thisItem) => {

    const tempObjectHandling = user.cart.find(item => item.id == thisItem.id )
    const arr = user.cart
    arr.pop(tempObjectHandling)
    tempObjectHandling.quantity = parseInt(quantityValue)+1
    arr.push(tempObjectHandling)
    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: user.cart
    }).then(function(){
      setIsLoading(false)
    })

  }

  return (
    !isLoading && (
      <div className="flex flex-col min-h-screen w-screen">
        <Nav />
      {user.cart.length==0?
       <h1>No items in the cart</h1>:
        <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                    <p className="ml-4  inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
                   
                 
                    <p className="ml-2 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {parseInt(item.quantity) * parseInt(item.item.price)}
                    </p>
                   
                  </div>
                  
                     ))}
                  <hr />
                  <div className="flex items-center justify-center m-3">
                  <Link to="/pay">
                  <button
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
                          </Link>
                          </div>
          </div>}
      </div>
    )
  );
}
