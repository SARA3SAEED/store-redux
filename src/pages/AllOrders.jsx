import React , { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'

function AllOrders() {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUser()
    }, [])

    
  // functions
  const getUser = () => {
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem("id")}`)
      .then(function (res) {
        setUser(res.data)          
      setIsLoading(false)
      });
    }
    
  return (!isLoading &&
    <div className='flex flex-col min-h-screen gap-4'>
        <Nav/>
        <h1>All orders: </h1>
        <div className='flex flex-col gap-2 items-center'>
            {
                user.oldShipments.map( items =>
                    
                    <div className="collapse collapse-arrow bg-base-200" key={items.id} >
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row max-sm:flex-col max-sm:gap-2 justify-between">
                        <h1>Order-No. {items.shipmentId}</h1>
                        <h1>Orded on: {items.date.slice(0,10)}</h1>
                        <h1>Total: {items.total.toFixed(2)}$</h1>
                    </div>

                    <div className="collapse-content" >
                    <div className='grid grid-cols-2 items-center gap-2'>
                       <div className='flex flex-row items-center gap-2'> <p>Product</p>
                        <p> </p></div>
                        <p>Price</p>
                    </div>
                    {items.shipmentDetailes.map (item => 
                        <div className='grid grid-cols-2 items-center gap-2' key={item.id} >
                               <div className='flex flex-row items-center gap-2'> <img className='w-14' src={item.item.images[0]}  />
                                <p>{item.item.title}</p></div>
                                <p>{item.item.price*item.quantity}$</p>
                        </div>)}

                    </div>

                    </div>)
            }
        </div>

    </div>
  )
}

export default AllOrders