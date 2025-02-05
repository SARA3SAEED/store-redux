import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuid } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

export default function Details() {
  // use states
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  // other varibles
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  // use effect
  useEffect(() => {
    getProduct();
    getUser();
  }, []);

  // functions
  const getProduct = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then(function (res) {
      setProduct(res.data);
      setIsLoading(false);
    });
  };
  const getUser = () => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
      });
  };

  const addToCart = () => {
    const arr = user.cart;
    // new producto to be added with two keys: object item with detailes and the quantity
    let NewProduct = {};

    // check if the item alredy in cart so you have to increase its quantity or add it newly
    const isItemPrec = user.cart.find((item) => item.item.id == product.id);
    if (isItemPrec === undefined) {
      NewProduct = { id: uuid(), item: product, quantity: quantity };
      arr.push(NewProduct);
      setUser({ ...user, cart: arr });
    } else {
      arr.pop(isItemPrec);
      isItemPrec.quantity = parseInt(isItemPrec.quantity) + parseInt(quantity);
      arr.push(isItemPrec);
      setUser({ ...user, cart: arr });
    }
    axios
      .put(
        `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
          "id"
        )}`,
        {
          userName: user.userName,
          email: user.email,
          password: user.password,
          cart: arr,
          oldShipments: user.oldShipments,
        }
      )
      .then(function () {
        setCartCount(arr.length);
        console.log("sucess");
        toast.success("Items added to cart !");
      });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col min-h-screen w-full">
      <Nav shick={cartCount} />

      <div className="flex justify-center items-center h-full m-auto w-full p-2">
        <div className="lg:w-3/5 border flex flex-col  justify-center rounded-lg text-surface shadow-secondary-1 md:flex-row">
          <img
            className="w-2/5 max-sm:m-auto rounded-t-lg object-cover md:h-auto  md:!rounded-none md:!rounded-s-lg"
            src={product.images[0]}
          />
          <div className="w-full flex flex-col justify-start p-6 h-96 ml-4">
            <h5 className="mb-2 text-xl font-medium h-20">{product.title}</h5>
            <p className="mb-4 text-base h-40">{product.description} </p>
            <p className="mb-4 text-base">{product.price}$ </p>

            <div className="flex max-sm:justify-center text-xs max-sm:w-full ">
              <input
                className="w-14 p-1 btn bg-primary"
                style={{
                  background: "linear-gradient(to right, #FDC830, #F37335)",
                }}
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                style={{
                  background: "linear-gradient(to right, #FDC830, #F37335)",
                }}
                className="btn mx-2 bg-primary "
                onClick={
                  localStorage.getItem("id") == undefined
                    ? () => navigate("/login")
                    : () => addToCart()
                }
              >
                {" "}
                Add to Cart{" "}
              </button>
              <button
                style={{
                  background: "linear-gradient(to right, #FDC830, #F37335)",
                }}
                className="btn mx-2 bg-secondary"
                onClick={() => navigate("/products")}
              >
                {" "}
                Back{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}
