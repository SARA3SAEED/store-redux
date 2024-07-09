import React from 'react';

export default function Feature() {
  return (
    <>
      {/* component */}
      <div className="flex flex-col bg-white items-center justify-center ">
        <div className="mt-4 flex  max-sm:flex-col max-sm:gap-4 mx-2 gap-14  items-center justify-center">
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border 
            border-green-100 bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 17l4-4 4 4m0-8l-4 4-4-4"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">Fast Delivery</h2>
              <p className="mt-2 text-sm text-gray-500">Get your products delivered in no time.</p>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border 
            border-yellow-100 bg-yellow-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">High Speed</h2>
              <p className="mt-2 text-sm text-gray-500">Experience the fastest service with us.</p>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border 
            border-blue-100 bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">24/7 Support</h2>
              <p className="mt-2 text-sm text-gray-500">We are here for you at any time, day or night.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
