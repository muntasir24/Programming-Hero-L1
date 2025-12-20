import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar></Navbar>
        <div className="flex-1 w-full max-w-7xl mx-auto   px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;