import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-black md:px-24 px-3 pt-15 text-white mt-12'> 
          <div className='flex  flex-wrap  justify-around gap-5'>
              <div className=' space-y-3 md:w-3/12'>
             <h2 className='text-xl font-bold'>CS — Ticket System</h2>
                <div className=''>CS — Ticket System is a modern customer support platform designed to streamline issue tracking and resolution for businesses of all sizes. With an intuitive interface, it allows support teams to manage tickets efficiently — from login problems and payment issues to feature requests and bug reports. 
                </div>
            </div>
            <div className='space-y-3 my-5 text-center md:text-left md:my-0'>
                <h2 className='text-xl font-bold'>Company</h2>
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Contact Saled</p>
            </div>
            <div className='space-y-3 my-5 text-center md:text-left md:my-0 '>
              <h2 className='text-xl font-bold'>Services</h2>
                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
            </div>
            <div className='space-y-3 my-5 text-center md:text-left md:my-0'>
                <h2 className='text-xl font-bold'>Information</h2>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>

            </div>
            <div className='space-y-3 my-5 text-center md:text-left md:my-0'>
                <h2 className='text-xl font-bold'>Social Links</h2>
                <div className='flex gap-1 items-center '><div className='border-2 p-1 rounded-4xl bg-white text-black' ><FaXTwitter/></div> <p>@CS — Ticket System</p></div>
                <div className='flex gap-1 items-center '><div className='border-2 p-1 rounded-4xl bg-white text-black' ><FaLinkedin/></div> @CS — Ticket System</div>
                <div className='flex gap-1 items-center '><div className='border-2 p-1 rounded-4xl bg-white text-black' ><FaFacebook/></div>@CS — Ticket System</div>
                <div className='flex gap-1 items-center '> <div className='border-2 p-1 rounded-4xl bg-white text-black' > <MdOutlineEmail/></div>support@cst.com</div>
            </div>
          </div>
        <div className='flex justify-center items-center border-t-1 border-gray-500 py-5 mt-10 text-center'>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;