import React from 'react';
import logo from '../assets/skillswap.png'
import { NavLink } from 'react-router';
const Navbar = () => {

    const links=<> 
<NavLink className={({isActive})=> isActive ? "underline text-[#A18D6D]  font-semibold text-lg ":"font-semibold text-lg"} to={'/'}>Home</NavLink>
<NavLink className={({isActive})=> isActive ? "underline text-[#A18D6D] font-semibold text-lg ":"font-semibold text-lg"}  to={'/profile'}>Profile</NavLink>
    </>
    return (
        <div className=' '>
         <div className="navbar py-5 bg-base-100  shadow-[0_2px_3px_rgba(86,111,205,0.3)]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow my-3">
        {links}
        <NavLink className='font-semibold text-lg'>Sign in</NavLink>
    <NavLink className="btn btn-primary mt-2">Sign Up for free</NavLink>
         
      </ul>
    </div>
    <NavLink to={'/'}><img className='w-20 md:ml-5  ' src={logo} alt="" /></NavLink>
    <p className='font-bold'><span className='text-[#A18D6D]'>SKILL</span> <span className='text-gray-700'>SWAP</span></p>
  </div> 
  <div className="navbar-center hidden lg:flex space-x-5">
   {links}
  </div>
  <div className="navbar-end hidden lg:flex  ">
    <NavLink to={'/auth/login'}>Sign in</NavLink>
    <NavLink to={'/auth/register'} className="btn btn-primary ml-2">Sign Up for free</NavLink>
  </div>
</div>
        </div>
    );
};

export default Navbar;