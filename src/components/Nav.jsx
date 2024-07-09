import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img55 from '../assets/img55.jpg';


export default function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)}

    const navigate = useNavigate()


    const logout = () => {

        localStorage.clear()
        navigate('/login')
    }
    return (
    <>
            {/* Main navigation container */}
            <nav
                 style={{
                    background:
                    "linear-gradient(to right, #FDC830, #F37335)"
                  }}
                className="px-5 rounded relative flex w-full flex-nowrap items-center 
                justify-between bg-amber-300  py-2 shadow-dark-mild  lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref="" >
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ms-2 md:me-2">
                    <Link to="/" className="text-xl text-amber-600 " >
                    <img className='rounded-full w-12' src={img55} alt="" />
                    </Link>
                </div>
                {/* Hamburger button for mobile view */}
                <button
                    className="block border-0 bg-transparent px-2 text-white 
                    hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none 
                    focus:outline-none focus:ring-0  lg:hidden"
                    type="button"
                    onClick={toggleCollapse}
                    data-twe-collapse-init=""
                    aria-controls="navbarSupportedContent14"
                    aria-expanded={isCollapsed}
                    aria-label="Toggle navigation">
                    {/* Hamburger icon */}
                    <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </span>
                </button>
                {/* Collapsible navbar container */}
                <div
                    className={`!visible mt-2 flex-grow basis-[100%] items-center 
                        lg:mt-0 lg:!flex lg:basis-auto ${isCollapsed ? 'block' : 'hidden'}`}
                    id="navbarSupportedContent14"
                    data-twe-collapse-item="" >
                    {/* Left links */}
                    <ul
                    className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                    data-twe-navbar-nav-ref="" >
                    {/* Home link */}
                    {/* <li
                        className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                        data-twe-nav-item-ref="">
                        <Link
                        className="p-0 text-white transition duration-200 hover:text-black/80 
                        hover:ease-in-out focus:text-black/80 active:text-black/80 
                        motion-reduce:transition-none  lg:px-2"
                        aria-current="page"
                        to="/"
                        data-twe-nav-link-ref="" >
                        Home
                        </Link>
                    </li> */}
                    <li
                        className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                        data-twe-nav-item-ref="" >
                        <Link
                        className="p-0 text-white transition duration-200 hover:text-black/80 
                        hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none 
                        lg:px-2"
                        aria-current="page"
                        to="/products"
                        data-twe-nav-link-ref="" >
                        Products
                        </Link>
                    </li>
                    
                    {
                    localStorage.getItem('id')==undefined?
                    <>
                    <li
                        className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                        data-twe-nav-item-ref="" >
                        <Link
                        className="p-0 text-white transition duration-200 hover:text-black/80 
                        hover:ease-in-out focus:text-black/80 active:text-black/80 
                        motion-reduce:transition-none  lg:px-2"
                        aria-current="page"
                        to="/singup"
                        data-twe-nav-link-ref="" >
                        Sing up
                        </Link>
                    </li>
                    {/* Link */}
                    <li
                        className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                        data-twe-nav-item-ref="" >
                        <Link
                        className="p-0 text-white transition duration-200 hover:text-black/80 hover:ease-in-out 
                        focus:text-black/80 active:text-black/80 motion-reduce:transition-none 
                        lg:px-2"
                        to="/login"
                        data-twe-nav-link-ref="" >
                        Log in
                        </Link>
                    </li>
                    </>:
                    <li onClick={()=>document.getElementById('my_modal_1').showModal()}
                    className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                    data-twe-nav-item-ref="" >
                    <Link
                    className="p-0 text-white transition duration-200 hover:text-black/80 hover:ease-in-out 
                    focus:text-black/80 active:text-black/80 motion-reduce:transition-none 
                    lg:px-2"
                    // to="/login"
                    data-twe-nav-link-ref="" >
                    Logout
                    </Link>
                </li>}
                    {/* Disabled link */}
                    </ul>
                    <div className="lg:w-[500px] lg:pe-2">
                    <div className="relative flex w-full flex-wrap items-stretch">
                        <input
                        type="search"
                        className="relative m-0 -me-0.5 block w-[1px] min-w-0 flex-auto rounded-s 
                        border border-solid border-white bg-transparent bg-clip-padding 
                        px-3 py-1 text-base font-normal leading-[1.6] text-surface outline-none 
                        transition duration-200 ease-in-out focus:z-[3] focus:border-base-900 
                        focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none 
                        placeholder:text-base-300 
                        "
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon3" />
                        {/*Search button*/}
                        <button
                        className="relative z-[2] rounded border border-white px-6 pb-[6px] pt-2 text-xs font-medium 
                        uppercase leading-normal text-amber-700 transition duration-150 ease-in-out hover:border-primary-accent-300 
                        hover:bg-base-500 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 
                        focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 
                        motion-reduce:transition-none "
                        type="button"
                        id="button-addon3"
                        data-twe-ripple-init="" >
                        Search
                        </button>
                        <Link
                        className="p-0 text-black/60 transition duration-200 hover:text-black/80 
                        hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none 
                        lg:px-2"
                        to="/cart" >
                        <img 
                            className='mx-3 mt-2 w-6 h-6' 
                            src='https://img.icons8.com/?size=160&id=hqh6JRLqKxt0&format=png'/>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">warning!</h3>
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-primary" onClick={()=>logout()} >Logout</button>
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </nav>
    </>
  )
}
