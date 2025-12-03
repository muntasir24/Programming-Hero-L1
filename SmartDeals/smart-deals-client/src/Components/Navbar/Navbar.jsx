import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Spinner from "../Spinner";

const Navbar = () => {
   const { user, loading,SignOutUSer } = use(AuthContext);
  const links = (
    <>
      {
        loading ? "":( <><li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      {
        user && <> 
        <li><NavLink to="/myProducts">My Products</NavLink></li>
        <li><NavLink to="/myBids">My Bids</NavLink></li>
        <li><NavLink to="/createAProduct">Create A Product</NavLink></li>
        </>
      } </>)
      }

    </>
  );
 const hadleSignOut=()=>{
  SignOutUSer();
 }
  console.log(loading);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            Smart <span>Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : user ? (
            <Link to={'/register'} className="btn btn-primary" onClick={hadleSignOut}>Sign Out</Link>
          ) : (
           <Link to={'/register'}>Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
