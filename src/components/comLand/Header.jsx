import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/landpage.jpg';

export default function Header() {
  return (
    <>
  <section className="bg-white ml-5">
  <div className=" px-6 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    <div className="flex flex-col justify-center">
      <h1 className="mt-14 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 
      md:text-5xl lg:text-6xl ">
      Explore Our Collection
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl d">
      Stay Updated with the Latest Trends and Exclusive Offers
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <Link
          to="/products"
          className="inline-flex justify-center items-center 
          py-3 px-5 text-base font-medium text-center text-white rounded-lg 
          bg-amber-300 hover:bg-amber-400  "
        >
         Shop Now
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      
      </div>
    </div>
    <div>
      <img
        className="mx-auto w-full lg:max-w-xl h-62 rounded-lg sm:h-96 shadow-xl"
        src={img}/>
        </div>
        </div>
      </section>

    </>
  )
}
