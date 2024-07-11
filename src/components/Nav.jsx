import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import img55 from "../assets/img55.jpg";
import LogoStore from "../assets/LogoStore.png";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/SearchSlice";
import axios from "axios";

export default function Nav(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [count, setCount] = useState(0);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const navigate = useNavigate();
  //////////

  const dispatch = useDispatch();
  const search2 = useSelector((state) => state.search);
  const searching = () => {
    dispatch(search(searchWord));
    navigate("../products");
  };

  //////////////
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    props.shick;
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setCount(res.data.cart.length);
      });
  }, [props.shick]);

  return (
    <>
      {/* Main navigation container */}
      <nav
        // style={{ background: "linear-gradient(to right, #FDC830, #F37335)" }}
        className="px-5 rounded relative flex w-full flex-nowrap items-center 
            justify-between bg-amber-300  py-2 shadow-dark-mild  lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref=""
      >
        <div className="flex w-full h-full flex-wrap items-center justify-between px-3">
          <div className="max-sm:gap-4 items-center flex ms-2 md:me-2">
            <Link to="/" className="text-xl text-amber-900 ">
              <img className="rounded-full w-12" src={LogoStore} alt="" />
            </Link>

            <div
              className="lg:w-28 text-center border border-amber-300 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref=""
            >
              <Link
                className="p-0 text-amber-900 font-bold transition duration-200 hover:text-amber-800
                        hover:ease-in-out focus:text-amber-800 active:text-amber-900 motion-reduce:transition-none 
                        lg:px-2"
                to="/products"
              >
                Products
              </Link>
            </div>

            <div
              className="lg:w-28 text-center border border-amber-300 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref=""
            >
              <Link
                className="p-0 text-amber-900 font-bold transition duration-200 hover:text-amber-800
                        hover:ease-in-out focus:text-amber-800 active:text-amber-900 motion-reduce:transition-none 
                        lg:px-2"
                to={
                  localStorage.getItem("islogin") == "true"
                    ? "/allOrders"
                    : "/login"
                }
                data-twe-nav-link-ref=""
              >
                All Order
              </Link>
            </div>
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
            aria-label="Toggle navigation"
          >
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
            className={`!visible mt-2  ml-4 lg:flex basis-[100%] items-center justify-end lg:mt-0 lg:basis-auto ${
              isCollapsed ? "block" : "hidden"
            }`}
            id="navbarSupportedContent14"
            data-twe-collapse-item=""
          >
            <div className="lg:w-[500px] lg:pe-2 items-center">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  type="search"
                  className="relative m-0 -me-0.5 block w-[1px] min-w-0 flex-auto rounded-s 
                     border border-solid border-white bg-transparent bg-clip-padding 
                     px-3 py-1 text-base font-normal leading-[1.6] text-surface outline-none 
                     transition duration-200 ease-in-out focus:z-[3] focus:border-base-900 
                     focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none 
                     placeholder:text-white 
                     "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                {/*Search button*/}
                <button
                  onClick={searching}
                  className="relative z-[2] rounded border border-white px-6 pb-[6px] pt-2 text-xs 
                     uppercase leading-normal text-amber-700 transition duration-150 ease-in-out hover:border-primary-accent-300 
                     hover:bg-base-500 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 
                     focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 
                     motion-reduce:transition-none font-bold "
                  type="button"
                  id="button-addon3"
                >
                  Search
                </button>
                <Link
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 
                     hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none 
                     lg:px-2"
                  to={
                    localStorage.getItem("islogin") == "true"
                      ? "/cart"
                      : "/login"
                  }
                >
                  <span
                    className="rounded-full bg-amber-50 text-amber-800 text-sm w-fit px-2"
                    hidden={
                      localStorage.getItem("islogin") == null ? true : false
                    }
                  >
                    {localStorage.getItem("islogin") == null ? null : count}
                  </span>
                  <svg
                    className="w-8 h-8 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#843018"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Left links */}
            <ul
              className="list-style-none me-auto flex ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref=""
            >
              {/* <li
                        className="w-20 text-center border border-amber-300 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4 lg:mb-0 lg:pe-1 lg:ps-0"
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
                    </li> */}
              {localStorage.getItem("id") == undefined ? (
                <>
                  <li
                    className="btn bg-transparent hover:bg-transparent border-none w-20 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4  lg:mb-0 lg:pe-1 lg:ps-0"
                    data-twe-nav-item-ref=""
                  >
                    <Link
                      className="p-0 text-amber-900 font-bold transition duration-200 hover:text-amber-800
                        hover:ease-in-out focus:text-amber-800 active:text-amber-900 motion-reduce:transition-none 
                        lg:px-2"
                      to="/singup"
                      data-twe-nav-link-ref=""
                    >
                      Sing up
                    </Link>
                  </li>
                  <li
                    className="btn bg-transparent hover:bg-transparent border-none w-20 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4  lg:mb-0 lg:pe-1 lg:ps-0"
                    data-twe-nav-item-ref=""
                  >
                    <Link
                      className="p-0 text-amber-900 font-bold transition duration-200 hover:text-amber-800
                        hover:ease-in-out focus:text-amber-800 active:text-amber-900 motion-reduce:transition-none 
                        lg:px-2"
                      to="/login"
                      data-twe-nav-link-ref=""
                    >
                      Log in
                    </Link>
                  </li>
                </>
              ) : (
                <li
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn bg-transparent hover:bg-transparent border-none w-20 p-3 mb-4 rounded lg:mx-1 ps-2 mr-1 mt-1 lg:ml-4  lg:mb-0 lg:pe-1 lg:ps-0"
                  data-twe-nav-item-ref=""
                >
                  <Link
                    className="p-0 text-amber-900 font-bold transition duration-200 hover:text-amber-800
                        hover:ease-in-out focus:text-amber-800 active:text-amber-900 motion-reduce:transition-none 
                        lg:px-2"
                    // to="/login"
                    data-twe-nav-link-ref=""
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">warning!</h3>
            <p className="py-4">Are you sure you want to logout?</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => logout()}
                >
                  Logout
                </button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </nav>
    </>
  );
}
