import React, { useState } from 'react';

export default function Caro() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };


    return (
        <>
        <div className='p-5 flex justify-center items-center  w-full'>
        <div
        id="carouselExampleIndicators"
        className="relative w-[68%]"
        data-twe-carousel-init=""
        data-twe-ride="carousel"
        >
        {/*Carousel indicators*/}
        <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 
            flex list-none justify-center p-0"
            data-twe-carousel-indicators=""
        >
        {[...Array(3)].map((_, index) => (

          <button
                key={index}
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to={index}
                className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 
                            border-y-[10px] border-solid border-transparent 
                            bg-white bg-clip-padding p-0 -indent-[999px] opacity-50  ${
                  activeIndex === index ? 'opacity-100' : 'opacity-50'
                } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                aria-current={activeIndex === index ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
        </div>


        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/*First item*/}
            {[0, 1, 2].map((index) => (
            <div
            key={index}
            className={`relative float-left w-full ${
              index === activeIndex 
              ? '-mr-[100%] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none' 
              : 'hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
            }`}
   
            data-twe-carousel-item=""
            data-twe-carousel-active=""
            >
            <img
               src={`https://images.pexels.com/photos/${index === 0 ? '10195371' : index === 1 ? '6625943' : '7810568'}/pexels-photo-${index === 0 ? '10195371' : index === 1 ? '6625943' : '7810568'}.jpeg?auto=compress&cs=tinysrgb&w=600`}
               className="block w-full rounded h-[400px]"
               alt={`Slide ${index + 1}`}
             />
            </div>
             ))}
           
        </div>






        {/*Carousel controls - prev item*/}
        <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide="prev"
            onClick={prevSlide}

        >
            <span className="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
            </span>
        </button>





        {/*Carousel controls - next item*/}
        <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide="next"
            onClick={nextSlide} >
            <span className="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
            </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next </span>
            </button>
        </div>
    </div>
    </>
  )
}
