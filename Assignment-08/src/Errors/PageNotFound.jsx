import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import err from '../assets/error-404.png'
import { useNavigate } from 'react-router';
const PageNotFound = () => {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar></Navbar>
        <div className=" flex gap-3 justify-center items-center flex-col flex-1 w-full max-w-7xl mx-auto   px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 ">
          <img className="w-90" src={err} alt="" />
          <h1 className="text-4xl font-black ">Oops, page not found!</h1>
          <h1 className="text-gray-600">
            The page you are looking for is not available.
          </h1>
          <button onClick={()=>navigate(-1)} className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-0">
            GO BACK
          </button>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default PageNotFound;