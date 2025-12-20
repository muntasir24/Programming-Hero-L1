import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../Components/ScrollOnTop";
 import { Toaster } from 'react-hot-toast';
import { AuthContext } from "../Contexts/AuthContext";
import Globalspinner from "../Spinner/Globalspinner";
const HomeLayout = () => {
 const {loading}=useContext(AuthContext);
  
  return (
    <div  className="flex flex-col h-full min-h-screen layout bg-gray-200">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      
      {loading ? <Globalspinner></Globalspinner>:<div className="flex-1 max-w-7xl mx-auto w-full px-2  min-h-screen "><Outlet></Outlet></div>}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
