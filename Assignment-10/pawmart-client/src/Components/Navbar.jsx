import React, {  useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/pawmart_logo.png";
import AuthModal from "./AuthModal";
import { AuthContext } from "../Contexts/AuthContext";
import UserAvatar from "./UserAvatar";


const Navbar = () => {
  const [ischecked, setIsChecked] = useState(false);
  const authRef = useRef();
  const {loading,user}=useContext(AuthContext);
  // console.log(user);
  // console.log(loading);

  const handleThemeToggle = () => {
    const newValue = !ischecked;
    setIsChecked(newValue);

    // save (true/false) as string
    localStorage.setItem("choice", JSON.stringify(newValue));

    // read and convert to boolean
    const saved = JSON.parse(localStorage.getItem("choice"));

    document.documentElement.setAttribute(
      "data-theme",
      saved ? "dark" : "light"
    );
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("choice"));
    if (saved !== null) {
      document.documentElement.setAttribute(
        "data-theme",
        saved ? "dark" : "light"
      );
    }
  }, []);

  const links = (
    <div className="flex flex-col md:flex-row gap-5 font-bold ">
      <NavLink className={({ isActive }) =>isActive ? "text-orange-500" : "hover:text-orange-500" }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "hover:text-orange-500"
        }
        to={"/petsSupplies"}
      >
        Pet & Supplies
      </NavLink>
      {user && <><NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "hover:text-orange-500"
        }
        to={"/addlistings"}
      >
        Add Listings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "hover:text-orange-500"
        }
        to={"/mylistings"}
      >
        My Listings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-orange-500" : "hover:text-orange-500"
        }
        to={"/myorders"}
      >
        My Orders
      </NavLink></>}
    </div>
  );
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar my-bg bg-primary shadow-sm text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <div
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-primary base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {loading? "":links}
            </div>
          </div>

          <Link>
            <img src={logo} className=" max-w-20" alt="" />
          </Link>
          <h1 className="text-3xl font-bold">
            PAW<span className="text-secondary">MART</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex menu menu-horizontal ">
          {loading ? "":links}
        </div>
        <div className="navbar-end ">
          <div className="mr-2 text-yellow-300  hidden md:flex  ">
            <label className="swap swap-rotate ">
              {/* this hidden checkbox controls the state */}
              <input readOnly
                onClick={handleThemeToggle}
                type="checkbox"
                checked={JSON.parse(localStorage.getItem("choice"))}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current flex text-center  my-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current flex text-center  my-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        {
          loading ?  " ":(
            user ? <UserAvatar></UserAvatar> : (  <Link
            className="btn my-btn rounded-2xl text-primary"
            onClick={(e) => {
              e.preventDefault(); // stop navigation
              authRef.current.open(); // open modal
            }}
          >
            Login / Register
          </Link>) 
          )
        }

          {/* The modal */}
          <AuthModal ref={authRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
