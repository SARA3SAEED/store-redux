import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Nav from "../components/Nav";

export default function Pay() {
  // use states
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  // other varibles
  const navigate = useNavigate();

  // use effect
  useEffect(() => {
    getUser();
  }, []);

  // functions
  const getUser = () => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
        const sum = res.data.cart.reduce(
          (acc, curr) => acc + curr.item.price * curr.quantity,
          0
        );
        setTotal(sum);

        // setTotal(total)
        setIsLoading(false);
      });
  };
  const checkout = () => {
    const newShipment = {
      shipmentId: uuid(),
      shipmentDetailes: user.cart,
      total: total,
      date: new Date(),
    };
    const arr = user.oldShipments;
    arr.push(newShipment);
    setUser({ ...user, oldShipments: arr });
    axios.put(
      `https://665736bb9f970b3b36c86669.mockapi.io/reduxStore/${localStorage.getItem(
        "id"
      )}`,
      {
        oldShipments: arr,
        cart: [],
      }
    );
  };

  return isLoading ? (
    <Laoder />
  ) : (
    <div className="flex flex-col min-h-screen items-center gap-4">
      <Nav />
      <h1 className="p-2 font-bold">Your Order 3 </h1>
      <div className="flex flex-row justify-between items-center p-4 w-2/3 max-sm:w-full rounded-md ">
        <h1>product</h1>
        <h1>price</h1>
      </div>
      {user.cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center p-4 border w-2/3 max-sm:w-full rounded-md "
        >
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-20 self-center"
              src={item.item.images[0]}
              alt={item.item.title}
            />
            <h1 className="text-center">{item.item.title}</h1>
          </div>

          <h1 className=" auto-cols-fr text-center">
            {parseInt(item.quantity) * parseFloat(item.item.price)}$
          </h1>
        </div>
      ))}

      <h1 className="text-end w-2/3 max-sm:w-full">
        {" "}
        <span className="font-bold ">Total </span>
        {total.toFixed(2)}$
      </h1>

      {/* Billing address form */}

      <div className="flex flex-col gap-2 w-2/3 max-sm:w-full items-start justify-center p-2">
        <h1>Billing address</h1>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            type="text"
            placeholder="1234 Main st, City, Country"
            className="input input-bordered placeholder-primary"
            required
          />
        </div>

        <h1>Payment</h1>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name on Card</span>
          </label>
          <input
            // value=""
            // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            type="text"
            placeholder="1234 Main st, State, Country"
            className="input input-bordered placeholder-primary"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Credit Card Number</span>
          </label>
          <input
            // value=""
            // onChange={(e)=>setUserData({...userData,username:e.target.value})}
            type="text"
            placeholder="1234 Main st, State, Country"
            className="input input-bordered placeholder-primary"
            required
          />
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Expiration</span>
            </label>
            <input
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
              type="text"
              placeholder="1234 Main st, State, Country"
              className="input input-bordered placeholder-primary"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">CVV</span>
            </label>
            <input
              // value=""
              // onChange={(e)=>setUserData({...userData,username:e.target.value})}
              type="text"
              placeholder="1234 Main st, State, Country"
              className="input input-bordered placeholder-primary"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 w-2/3 max-sm:w-full items-center justify-end p-2">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => checkout()}
        >
          Pay
        </button>
        <button className="btn" onClick={() => navigate("/cart")}>
          back to cart
        </button>
      </div>
    </div>
  );
}
