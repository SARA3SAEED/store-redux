import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LandPage from '../pages/LandPage';
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Cart from '../pages/Cart';
import Pay from '../pages/Pay';
import AllOrders from '../pages/AllOrders';
import NotFound from '../pages/NotFound';



export default function Router() {

    const router = createBrowserRouter([
        { path: "/", element: <LandPage />, },
        { path: "/singup", element: <Singup />, },
        { path: "/login", element: <Login />, },
        { path: "/products", element: <Products />, },
        { path: "/det/:id", element: <Details />, },
        { path: "/cart", element: <Cart />, },
        { path: "/pay", element: <Pay />, },
        { path: "/allOrders", element: <AllOrders />, },
        { path: "/*", element: <NotFound />, },
    ])
    return (<RouterProvider router={router} />)
}
