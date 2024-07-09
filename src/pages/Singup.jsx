import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import img55 from '../assets/img55.jpg';


export default function Singup() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handelPost = () => {
    const newUser = {
      userName,
      email,
      password,
      cart: [],
      oldShipments: []
    }
    if (userName.length < 4) {
      toast.error("User Name Must Be More Than 3 Letter", {
        position: "top-center"
      })
    } else if (!email.match('[a-zA-z0-9]@gmail.[a-zA-z0-9]')) {
      toast.error("The Email Must Contain @gmail", {
        position: "top-center"
      })
    } else if (!password.match('[a-z]') || !password.match('[A-Z]') || !password.match('[0-9]')) {
      toast.error("Password Must Contain One Small Letter , One Big Letter, One Number", {
        position: "top-center"
      })
    } else {
      axios.get('https://665736c59f970b3b36c866df.mockapi.io/reduxStore').then((res) => {
        const notNew = res.data.find((e) => { e.email == email })
        if (notNew) {
          toast.error("This Email Have Already Been Used", {
            position: "top-center"
          })
        } else {
          axios.post('https://665736c59f970b3b36c866df.mockapi.io/reduxStore', newUser).then(
            toast.success("You Have Successfully Made An Account", {
              position: "top-center"
            }),
            navigate('../login')
          )
        }
      })
    }

  }




  return (
    <>
      {/* toast */}
      <ToastContainer stacked />
      {/* <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='text' type="text" name="" id="" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" name="" id="" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" name="" id="" />
      <button onClick={handelPost}>send  </button> */}

      <section className="gradient-form h-screen bg-neutral-200 ">
  <div className="container lg:mx-24 h-full p-10">
    <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 ">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg ">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* Left column container*/}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/*Logo*/}
                <Link to="/" className="text-center rounded-full">
                  <img
                    className="mx-auto w-40 mb-9"
                    src={img55}
                    alt="logo"
                  />
                </Link>
                <form>
                  {/*Username input*/}
                  <div className="relative mb-4" data-twe-input-wrapper-init="">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 
                      py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear 
                      focus:placeholder:opacity-100 peer-focus:text-primary 
                      data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlInput1"
                      placeholder="Username"
                      value={userName} 
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 
                      max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
                      text-neutral-500 transition-all duration-200 ease-out 
                      peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-amber-400 
                      peer-data-[twe-input-state-active]:-translate-y-[0.9rem] 
                      peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Username
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative mb-4" data-twe-input-wrapper-init="">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 
                      py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear 
                      focus:placeholder:opacity-100 peer-focus:text-primary 
                      data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] 
                      origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 
                      transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
                      peer-focus:scale-[0.8] peer-focus:text-amber-400 
                      peer-data-[twe-input-state-active]:-translate-y-[0.9rem] 
                      peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Email
                    </label>
                  </div>
                  {/*Password input*/}
                  <div className="relative mb-4" data-twe-input-wrapper-init="">
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 
                      py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear 
                      focus:placeholder:opacity-100 peer-focus:text-primary 
                      data-[twe-input-state-active]:placeholder:opacity-100 
                      motion-reduce:transition-none "
                      id="exampleFormControlInput11"
                      placeholder="Password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] 
                      origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 
                      transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
                      peer-focus:scale-[0.8] peer-focus:text-amber-400 
                      peer-data-[twe-input-state-active]:-translate-y-[0.9rem] 
                      peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Password
                    </label>
                  </div>
                  {/*Submit button*/}
                  <div className="mb-2 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs 
                      font-medium uppercase leading-normal text-white shadow-dark-3 transition 
                      duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none 
                      focus:ring-0 active:shadow-dark-2 "
                      type="button"
                      data-twe-ripple-init=""
                      data-twe-ripple-color="light"
                      onClick={handelPost}
                      style={{
                        background:
                        "linear-gradient(to right, #FDC830, #F37335)"
                      }}
                    >
                      Log in
                    </button>
                    {/*Forgot password link*/}
                  </div>
                  {/*Register button*/}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 me-2">Are You have an account?</p>
                    <Link to="/login"
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 
                      text-xs font-medium uppercase leading-normal text-danger transition duration-150 
                      ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 
                      focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 
                      focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                      data-twe-ripple-init=""
                      data-twe-ripple-color="light"
                    >
                      Log in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* Right column container with background and description*/}
            <div
              className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
              style={{
                background:
                  "linear-gradient(to right, #FDC830, #F37335)"
              }}
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
