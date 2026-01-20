import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="py-10"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
