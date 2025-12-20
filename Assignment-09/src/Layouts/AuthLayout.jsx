import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Contexts/AuthContext';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const AuthLayout = () => {
    const {loadingUser}=useContext(AuthContext);
    if(loadingUser)return <GlobalSpinner></GlobalSpinner>
    return (
        <div className='bg-gray-100'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default AuthLayout;