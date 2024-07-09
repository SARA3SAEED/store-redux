import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// import { v4 as uuid } from 'uuid';
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Nav";

export default function Cart() {
  // use states
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // other variles
    const navigate = useNavigate()
  // use effect

  useEffect(() => {
    getProductsAndUser();
  }, []);

  // functions
  const getProductsAndUser = () => {
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}`)
      .then(function (res) {
        setUser(res.data);
        setIsLoading(false);
      });
  }

  const decreseQuantity = (quantityValue , thisItem , id) => {
    console.log(user.cart);
    // const tempObjectHandling = user.cart.find(item => item.id == id )
    const arr = user.cart
    console.log(arr);
    arr.pop(thisItem)
    console.log(arr);
    thisItem.quantity = parseInt(quantityValue)-1
    arr.push(thisItem)
    setUser({...user , cart:arr})
    console.log(arr);
    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: user.cart
    }).then(function(){
      setIsLoading(false)
    })

  }

  const increaseQuantity = (quantityValue , thisItem , id) => {
    console.log(user.cart);
    // const tempObjectHandling = user.cart.find(item => item.id == id )
    const arr = user.cart
    console.log(arr);
    arr.pop(thisItem)
    console.log(arr);
    thisItem.quantity = parseInt(quantityValue)+1
    arr.push(thisItem)
    setUser({...user , cart:arr})
    console.log(arr);
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: user.cart
    }).then(function(){
      setIsLoading(false)
    })

  }

  const handleClick = (thisItem) => {
    const arr = user.cart
    arr.pop(thisItem)
    setUser({...user , cart:arr})
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}` , {
      cart: user.cart
    }).then(function(){
      setIsLoading(false)
    })
  }

  return (
    !isLoading && (
      <div className="flex flex-col min-h-screen w-ful">
        <Nav />
        {user.cart.length==0?
        <h1>No items in the cart</h1>:
          <div className="flex flex-col items-center m-auto">
          <div className="grid grid-cols-4 w-full p-4 border items-center text-center">
            <h1>product</h1>
            <h1>price</h1>
            <h1>quantity</h1>
            <h1>total</h1>
          </div>
          {user.cart.map((item) => (
            <div className="grid grid-cols-5 w-full p-4 border items-center justify-center" key={item.id} >
              {/* 1 */}
              <div className="flex flex-col auto-cols-fr items-center justify-center w-96">
                <img className="w-52 self-center" src={item.item.images[0]} alt={item.item.title} />
                <h1 className="text-center">{item.item.title}</h1>
              </div>
            {/* 2 */}
              <h1 className=" auto-cols-fr text-center">{item.item.price}$</h1>

            {/* 3 */}
              <div className="flex flex-row gap-2 items-center self-center justify-center auto-cols-fr">
                <button className="w-14 btn" onClick={()=> decreseQuantity(item.quantity , item )}>-</button>
                <h1>{item.quantity}</h1>
                <button className="w-14 btn" onClick={()=> increaseQuantity(item.quantity , item )}>+</button>
              </div>
              {/* 4 */}
              <h1 className=" auto-cols-fr text-center">{parseInt(item.quantity) * parseInt(item.item.price)}$</h1>
              {/* 5 */}
              <svg role="button" onClick={()=>handleClick(item)} className="w-6 h-6 text-gray-800 m-auto  auto-cols-fr" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>

            </div>
          ))}
        </div>}
          
        <button className="btn btn-primary w-fit m-4 self-end" onClick={()=>navigate('/Pay')} >Checkout</button>
      </div>
    )
  );
}
