import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const search2 = useSelector((state) => state.search);

  useEffect(() => {
    getproducts()
  }, [search2])

  const getproducts = () => {
    axios.get(`https://dummyjson.com/products/search?q=${search2.keyword}`)
      .then((res) => {
        setProducts(res.data.products)
        setIsLoading(false)
      })
  }

  return (!isLoading &&
    <>
      <Nav />
      <div className='flex flex-wrap justify-center gap-2 mt-5'>
        {products.map((e) => {
          return (
            <div key={e.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className='flex justify-center items-center '>
                <img
                  className="p-8 w-52 h-72 rounded-t-lg"
                  src={e.images[0]}
                  alt="product image"
                />
              </div>
              <div className="px-5 pb-5">
                <div >
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                    {e.title}
                  </h5>
                </div>




                {/*  rating */}
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className={`w-4 h-4 ${e.rating >= 1 ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${e.rating >= 2 ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${e.rating >= 3 ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${e.rating >= 4 ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${e.rating >= 5 ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    {e.rating}
                  </span>
                </div>

                {/* end rating */}




                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 ">
                    {e.price}$
                  </span>
                  <Link
                    style={{
                      background: "linear-gradient(to right, #FDC830, #F37335)"
                    }}
                    to={`/det/${e.id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
      <Footer />
      </div>
    </>
  )
}
