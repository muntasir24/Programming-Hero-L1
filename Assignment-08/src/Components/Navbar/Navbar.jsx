import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import appicon from '../../assets/logo.png'
import "./Nav.css"
import { motion, scale } from "framer-motion"; 
import { Github } from 'lucide-react';

const Navbar = () => {
  motion ,scale
  const navigate = useNavigate();
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown ml-[-14px]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden md:hidden ml-0"
            >
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
              {[
                { path: "/", label: "Home" },
                { path: "/apps", label: "Apps" },
                { path: "/installation", label: "Installation" },
              ].map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active-link font-semibold" : "font-semibold"
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-12 ml-8 md:ml-18 flex justify-center items-center gap-3">
            
              <img onClick={()=>navigate("/")}  className="cursor-pointer" src={appicon} alt="" />
            
            <h1 className="font-semibold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              HERO.IO
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="mynav gap-7 menu-horizontal px-1 ">
            {[
              { path: "/", label: "Home" },
              { path: "/apps", label: "Apps" },
              { path: "/installation", label: "Installation" },
            ].map((item) => (
              <motion.li
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active-link font-semibold" : "font-semibold"
                  }
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/muntasir24"
            target="_blank"
            className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 md:mr-10"
          >
            <Github />
            Contribute
          </a>
        </div>
      </div>
    );
};

export default Navbar;