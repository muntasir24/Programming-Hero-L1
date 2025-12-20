import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { Droplets, LayoutDashboard, LogOut, Loader2 } from 'lucide-react';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const Navbar = () => {
  const { user, loadingUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/donation-requests" 
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : 'text-gray-600'}`}
        >
          Donation Requests
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink 
            to="/funding" 
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : 'text-gray-600'}`}
          >
            Funding
          </NavLink>
        </li>
      )}
      <li>
        <NavLink 
          to="/blog" 
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : 'text-gray-600'}`}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
if(loadingUser)return <GlobalSpinner></GlobalSpinner>
  return (
    <div className="navbar bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-red-50 px-4 md:px-10 h-20">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-100 rounded-2xl w-60 border border-red-50">
            {navLinks}
          </ul>
        </div>
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-red-50 p-2 rounded-xl group-hover:bg-red-100 transition-all duration-500 transform group-hover:rotate-12">
            <Droplets className="text-red-600 animate-heartbeat" size={28} fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-800 hidden sm:block">
            Blood<span className="text-red-600">Flow</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center px-1">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End: Handling Auth & Refresh States */}
      <div className="navbar-end gap-4">
        {loadingUser ? (
          /* Small elegant loader while refreshing to prevent UI jump */
          <div className="flex items-center gap-2 text-red-600 font-medium animate-pulse">
            <Loader2 className="animate-spin" size={20} />
            <span className="text-xs uppercase tracking-widest">Verifying</span>
          </div>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-red-500 hover:scale-105 transition-transform">
              <div className="w-10 rounded-full">
                <img 
                  alt="User Profile" 
                  src={user?.photoURL || "https://i.ibb.co/XF0t7rT/user.png"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-4 z-[1] p-3 shadow-2xl menu dropdown-content bg-base-100 rounded-3xl w-64 border border-red-50 animate-in fade-in zoom-in duration-200">
              <li className="px-4 py-3 border-b border-gray-100 mb-2">
                <p className="font-bold text-gray-800 text-lg">{user?.displayName}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </li>
              <li>
                <Link to="/dashboard/main" className="flex items-center gap-3 p-3 hover:bg-red-50 rounded-xl transition-colors font-semibold">
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogOut}
                  className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-semibold"
                >
                  <LogOut size={18} /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
             <Link to="/auth/login" className="text-gray-600 font-bold hover:text-red-600 px-4 transition-colors">
              Login
            </Link>
            <Link to="/auth/register" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95">
              Join Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;