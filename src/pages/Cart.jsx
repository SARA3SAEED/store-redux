import React , { useState , useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
// import { v4 as uuid } from 'uuid';
import "react-toastify/dist/ReactToastify.css";
import Nav from '../components/Nav';

export default function Cart() {

  const [product, setProduct] = useState([])
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
      getProductsAndUser()
    
    }, [])
    


  // functions
    const getProductsAndUser = () => {
      axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem('id')}`)
      .then(function(res){
        setUser(res.data)
        setProduct(res.data.cart)
      })
    }



  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <Nav/>
      <div className='flex flex-col items-center m-auto'>
      <div className='grid grid-cols-4 w-full p-4 border'>
        <h1>product</h1>
        <h1>price</h1>
        <h1>quantity</h1>
        <h1>total</h1>
      </div>
          {
            user.cart.map(item => 

              <div className='grid grid-cols-4 w-full p-4 border'>
                <div className='flex flex-row'>
                  <img src={item.item.images[0]} alt={item.item.title} />
                  <h1>{item.item.title}</h1>
                </div>

                <h1>{item.item.price}</h1>
                <h1>{item.quantity}</h1>
                <h1>{parseInt(item.quantity)*parseInt(item.item.price)}</h1>
              </div>
            )

          }
      </div>
      
    </div>
  )
}
