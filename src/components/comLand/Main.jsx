import React from 'react';



export default function Main() {
  return (
    <>
      <div className='py-8 px-6 mx-auto max-w-screen-xl lg:py-16'>
        <div className="grid gap-4">
          <div className=''>
            <img
              className="lg:h-[500px] lg:w-[100%] rounded-lg"
              src="https://t4.ftcdn.net/jpg/07/04/35/11/360_F_704351155_9nuMDCxI00qsQK7g2OJZogVPYzLx2dSM.jpg" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
