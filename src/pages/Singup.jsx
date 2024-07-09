import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Singup() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handelPost = () => {
    //object Containning the new user
    const newUser = {
      userName,
      email,
      password,
      cart: [],
      oldShipments: []
    }
    //validation
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
        //look if email is already used
        const notNew = res.data.find((e) => { e.email == email })
        //if used show toast
        if (notNew) {
          toast.error("This Email Have Already Been Used", {
            position: "top-center"
          })
        } else {
          //if not used make a post req and send the object we create before
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
    <div className='flex flex-col gap-4'>
      {/* toast */}
      <ToastContainer stacked />

      <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='text' type="text" name="" id="" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" name="" id="" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" name="" id="" />
      <button onClick={handelPost}>send  </button>
    </div>
  )
}
