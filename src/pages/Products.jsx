import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getproducts()
  }, [])

  const getproducts = () => {
    axios.get(`https://api.escuelajs.co/api/v1/products`).then((res) => {
      console.log(res.data);
      setProducts(res.data)
      setIsLoading(false)
    })
  }

  return (!isLoading &&
    <div>
      {/* the card holder */}
      <div className='flex flex-wrap justify-center gap-2'>
        {
          products.map((e) => {
            return (
              // card
              <div key={e.id} className='flex flex-col gap-4 w-40 h-72 justify-center border'>
                <img className='w-full' src={e.images[0]} alt="" />
                <span>{e.title}</span>
                <div className='flex justify-between'>
                  <span>{e.price}$</span>
                  <button>detail</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
