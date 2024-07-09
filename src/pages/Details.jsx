import React , { useState , useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import "react-toastify/dist/ReactToastify.css";
import Nav from '../components/Nav';




export default function Details() {

  // use states
  const [product, setProduct] = useState({})
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  // other varibles
  const params = useParams()
  const id = params.id
  const navigate = useNavigate()


  // use effect
  useEffect(() => {
    getProduct()
    getUser()
  
  }, [])


  // functions
  const getProduct = () => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(function (res) {
      setProduct(res.data)
      setIsLoading(false)
    })
  }
  const getUser = () => {
    axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem('id')}`)
    .then(function(res){
      setUser(res.data)
    })
  }

  const addToCart = () => {
    const arr = user.cart
    // new producto to be added with two keys: object item with detailes and the quantity
    let NewProduct = {}

    // check if the item alredy in cart so you have to increase its quantity or add it newly
    const isItemPrec = user.cart.find((item) => item.item.id == product.id)
    if(isItemPrec === undefined){
      NewProduct = {id:uuid() , item:product , quantity:quantity}
      arr.push(NewProduct)
      setUser({...user,cart:arr})

    } else {

      arr.pop(isItemPrec)
      isItemPrec.quantity = parseInt(isItemPrec.quantity) + parseInt(quantity)
      arr.push(isItemPrec)
      setUser({...user,cart:arr})
    }
    axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem('id')}`,{
      userName:user.userName,
      email: user.email,
      password: user.password,
      cart: arr,
      oldShipments: user.oldShipments,
    })
    .then(function () {
      console.log('sucess')
      toast.success("Items added to cart !" ,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      )
    })
  }


  return (
    !isLoading&&<div className='flex flex-col min-h-screen w-screen'>
      <Nav/>

      {/* body container */}
      <div className='flex flex-row max-sm:flex-col items-center m-auto'>
        {/* right side (Image) */}
      <img className='w-96' src={product.images} alt={product.title} />


      {/* letf side container */}
      <div className='flex flex-col'>

      {/* Title and category */}
      <div className='flex flex-row gap-4 items-center'>
        <h1>{product.title}</h1>
        <p className='p-1 rounded-full text-sm text-zinc-500'>{product.category.name}</p>
      </div>
      
      {/* description */}
      <p>{product.description}</p>


      {/* rate */}
        <div className='flex flex-row gap-4'>

        <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                4.0
              </span>
            </div>
          

        </div>

        {/* Price */}
        <p>{product.price}$</p>

      {/* Buttons */}
        <div className='flex flex-row'>

          <input 
          className='w-14 p-1 btn'
          type="number" 
          min={1}
          value={quantity} 
          onChange={(e)=>setQuantity(e.target.value)} />

          <button className='btn'
          onClick={()=>addToCart()}
          >Add to Cart</button>

          <button className='btn'
          onClick={()=>navigate('/products')}>
            Back</button>

        </div>


      </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
