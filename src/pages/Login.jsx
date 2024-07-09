import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import img55 from '../assets/img55.jpg';





export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handelLogin = () => {
    axios.get('https://665736bb9f970b3b36c86669.mockapi.io/reduxStore')
      .then(function (res) {
        res.data.map((e) => {
          if (e.userName == userName && e.password == password) {
            localStorage.setItem('islogin', true)
            localStorage.setItem('id', e.id)
            toast.success("You Have Successfully Logged In", {
              position: "top-center"
            })
            navigate(`/`)
          } else {
            toast.error("User Name or Password is invalid", {
              position: "top-center"
            })
          }
        })
      })
  }



  return (
    <>
      {/* toast */}
      {/* <ToastContainer stacked />
      <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='text' type="text" name="" id="" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" name="" id="" />
      <button onClick={handelLogin}>send  </button> */}



      <section className="gradient-form h-screen bg-primary ">
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
                            className="peer block min-h-[auto] w-full rounded border-0 
                            bg-primary px-3 py-[0.32rem] leading-[1.6] outline-none 
                            transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                            peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 
                            motion-reduce:transition-none "
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
                            peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                            peer-focus:text-amber-400 peer-data-[twe-input-state-active]:-translate-y-[0.9rem] 
                            peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                          >
                            Username
                          </label>
                        </div>
                        {/*Password input*/}
                        <div className="relative mb-4" data-twe-input-wrapper-init="">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 
                            bg-primary px-3 py-[0.32rem] leading-[1.6] outline-none 
                            transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                            peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 
                            motion-reduce:transition-none "
                            id="exampleFormControlInput11"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 
                            max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
                            text-neutral-500 transition-all duration-200 ease-out 
                            peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                            peer-focus:text-amber-400 
                            peer-data-[twe-input-state-active]:-translate-y-[0.9rem] 
                            peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                          >
                            Password
                          </label>
                        </div>
                        {/*Submit button*/}
                        <div className="mb-2 pb-1 pt-1 text-center">
                          <button
                            onClick={handelLogin}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs 
                            font-medium uppercase leading-normal text-white shadow-dark-3 transition 
                            duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 
                            focus:outline-none focus:ring-0 active:shadow-dark-2"
                            type="button"
                            data-twe-ripple-init=""
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #FDC830, #F37335)"
                            }}
                          >
                            Log in
                          </button>
                          {/*Forgot password link*/}
                          <a href="#!">Forgot password?</a>
                        </div>
                        {/*Register button*/}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link to="/singup"
                            type="button"
                            className="inline-block rounded border-2 border-primary px-6 pb-[6px] 
                            pt-2 text-xs font-medium uppercase leading-normal text-danger transition 
                            duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 
                            hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 
                            focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 
                            active:text-danger-700 "
                            data-twe-ripple-init=""
                            data-twe-ripple-color="light"
                          >
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right column container with background and description*/}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg 
                    lg:rounded-bl-none"
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
