import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const list = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn bg-white px-9  text-[#23BE0A] border-[#23BE0A] border-1  font-bold "
            : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "btn  bg-white px-9 text-[#23BE0A] border-[#23BE0A] border-1 font-bold "
            : ""
        }
      >
        About
      </NavLink>
   
      <NavLink
        to="/readlist"
        className={({ isActive }) =>
          isActive
            ? "btn  bg-white px-9 text-[#23BE0A] border-[#23BE0A] border-1 font-bold "
            : ""
        }
      >
       Read List
      </NavLink>
    </>
  );

  return (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex lg:gap-3">{list}</div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
