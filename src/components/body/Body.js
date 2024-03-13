import React from "react";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";

const Body = () => {
  return (
    <>
    <NavBar />
    <div className="flex">
      
      <SideBar />
      <Outlet />
    </div>
    </>
  );
};

export default Body;
