import React from 'react';
import { NavLink } from 'react-router';
import appicon from '../../assets/logo.png'

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className='w-12 md:ml-10'>
            <img className='' src={appicon} alt="" /></div>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="gap-5 menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installation"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;