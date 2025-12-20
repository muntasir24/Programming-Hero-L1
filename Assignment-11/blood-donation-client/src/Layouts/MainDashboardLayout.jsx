import React, { useContext, useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

import { 
  LayoutDashboard, 
  Users, 
  Droplets, 
  FileText, 
  LogOut, 
  Home,
  ChevronRight,
  Menu,
  ChevronLeft
} from 'lucide-react';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const MainDashboardLayout = () => {
  const { user, role, logOut ,loadingUser,roleloading} = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar state

console.log(user);
console.log(role,roleloading);
  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  const allLinks = [
    { name: 'Statistics', path: '/dashboard/admin-home', icon: <LayoutDashboard size={22} />, access: ['admin', 'donor'] },
    { name: 'All Users', path: '/dashboard/all-users', icon: <Users size={22} />, access: ['admin'] },
    { name: 'Donation Requests', path: '/dashboard/all-requests', icon: <Droplets size={22} />, access: [ 'donor','admin'] },
    { name: 'My Request', path: '/dashboard/my-request', icon: <FileText size={22} />, access: ['admin','donor'] },
  ];
  const adminLinks = allLinks.filter(link => link.access.includes(role));
  console.log(adminLinks);
  if(loadingUser)return <GlobalSpinner></GlobalSpinner>

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* --- ASIDE (SIDEBAR) --- */}
      <aside 
        className={`${
          isCollapsed ? 'w-20' : 'w-64 lg:w-72'
        } bg-red-50/50 backdrop-blur-xl border-r border-red-100 flex flex-col sticky top-0 h-screen transition-all duration-500 ease-in-out z-20`}
      >
        
        {/* Sidebar Header */}
        <div className={`h-20 flex items-center border-b border-red-100/50 ${isCollapsed ? 'justify-center' : 'px-6'}`}>
          <Link to="/" className="flex items-center gap-3 overflow-hidden">
            <div className="bg-red-600 p-2 rounded-xl shadow-lg shadow-red-200 shrink-0">
              <Droplets className="text-white" size={24} fill="currentColor" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-black text-gray-800 whitespace-nowrap">
                Admin<span className="text-red-600">Panel</span>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {!isCollapsed && (
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest ml-2 mb-4 animate-in fade-in duration-500">
              Main Menu
            </p>
          )}
          
          {adminLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              title={isCollapsed ? link.name : ""}
              className={({ isActive }) => 
                `flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                  isActive 
                  ? 'bg-red-600 text-white shadow-xl shadow-red-200' 
                  : 'text-gray-600 hover:bg-white hover:text-red-600'
                }`
              }
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0">{link.icon}</span>
                {!isCollapsed && (
                  <span className="font-bold text-sm tracking-tight animate-in slide-in-from-left-2">{link.name}</span>
                )}
              </div>
              {!isCollapsed && <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
            </NavLink>
          ))}
          
          <div className={`pt-6 mt-6 border-t border-red-100/50 ${isCollapsed ? 'px-0' : 'px-2'}`}>
            <Link to="/" className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} py-3 text-gray-500 hover:text-red-600 transition-colors`}>
              <Home size={22} />
              {!isCollapsed && <span className="font-bold text-sm">Back to Home</span>}
            </Link>
            <button 
              onClick={handleLogOut}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} py-3 text-red-500 hover:bg-red-100/50 rounded-xl transition-all mt-2`}
            >
              <LogOut size={22} />
              {!isCollapsed && <span className="font-bold text-sm">Sign Out</span>}
            </button>
          </div>
        </nav>

        {/* User Info Footer */}
        <div className={`p-3 bg-white/60 m-3 rounded-2xl border border-red-100 transition-all ${isCollapsed ? 'mx-2' : ''}`}>
          <div className="flex items-center gap-3">
            <img 
              src={user?.photoURL || "https://i.ibb.co/XF0t7rT/user.png"} 
              alt="Admin" 
              className={`${isCollapsed ? 'w-10 h-10' : 'w-14 h-14 '} rounded-full border-2 border-red-200 shadow-sm shrink-0`}
            />
            {!isCollapsed && (
              <div className="overflow-hidden animate-in fade-in">
                <p className="text-xs font-black text-gray-800 truncate">{user?.displayName}</p>
                <span className="text-[9px] bg-red-600 text-white px-2 py-0.5 rounded-md font-bold uppercase">{role}</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-500">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-6">
            {/* COLLAPSE TOGGLE BUTTON */}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 transition-all border border-gray-100"
            >
              {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
            </button>

            <h2 className="text-xl font-black text-gray-800 tracking-tight hidden md:block">
              Welcome {user?.displayName}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Status</p>
              <p className="text-xs font-bold text-green-600 flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>  Live
              </p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-[1600px] mx-auto w-full">
           <Outlet /> 
        </div>
       
      </main>

    </div>
  );
};

export default MainDashboardLayout;