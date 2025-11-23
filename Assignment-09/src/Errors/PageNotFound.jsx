import React from 'react';
import image from '../assets/page-not-found.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PageNotFound = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
             <div className='flex-1 min-h-screen'>
                <img src={image} alt="" />
             </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;