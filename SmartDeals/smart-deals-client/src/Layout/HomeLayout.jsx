import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gray-50'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;