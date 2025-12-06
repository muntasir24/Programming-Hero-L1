import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
   
  return (
    <div  className="flex flex-col h-full min-h-screen layout bg-gray-200">
      <Navbar></Navbar>
      <div className="flex-1 max-w-7xl mx-auto w-full px-2  min-h-screen"><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
