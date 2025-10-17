import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;