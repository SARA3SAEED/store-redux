import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handelLogin = () => {
    axios.get('https://665736c59f970b3b36c866df.mockapi.io/reduxStore')
      .then(function (res) {
        res.data.map((e) => {
          if (e.userName == userName && e.password == password) {
            //replace with redux when you uderstand it
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
    <div className='flex flex-col gap-4'>
      {/* toast */}
      <ToastContainer stacked />

      <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='text' type="text" name="" id="" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" name="" id="" />
      <button onClick={handelLogin}>send  </button>
    </div>
  )
}
