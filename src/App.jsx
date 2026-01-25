import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Wishlist from "./pages/wishlist/wishlist";
import Details from "./pages/details/details";
import Cart from "./pages/cart/cart";
import CheckOut from "./pages/checkOut/checkOut";
import Account from "./pages/account/account";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import Error from "./pages/error/error";

const App = () => {
  const router = createBrowserRouter([
    {
      // errorElement: <Error />,
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkOut",
          element: <CheckOut />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
