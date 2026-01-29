import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

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
import { Toaster } from "react-hot-toast";

const getToken = () => localStorage.getItem("token");

const ProtectedRoute = ({ children }) => {
  const token = getToken();
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

const AuthRoute = ({ children }) => {
  const token = getToken();
  if (token) return <Navigate to="/account" replace />;
  return children;
};

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "details/:id", element: <Details /> },
        { path: "cart", element: <Cart /> },

        {
          path: "checkOut",
          element: (
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          ),
        },
        {
          path: "account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
        },

        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        {
          path: "login",
          element: (
            <AuthRoute>
              <Login />
            </AuthRoute>
          ),
        },
        {
          path: "signUp",
          element: (
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="bottom-left"  reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
