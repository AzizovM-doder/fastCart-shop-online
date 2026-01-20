import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="py-10"></div>
      <Outlet />
      <div className="grow"></div>
      <Footer/>
    </div>
  );
};

export default Layout;
