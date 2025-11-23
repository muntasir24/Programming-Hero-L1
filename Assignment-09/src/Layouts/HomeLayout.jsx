import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../Components/ScrollToTOp';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthContext';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const HomeLayout = () => {

        const {loadingUser}=useContext(AuthContext);
        if(loadingUser)return <GlobalSpinner></GlobalSpinner>;
    return (
        <div className='flex flex-col min-h-screen bg-gray-100   '>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <div className='flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;