import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from "../assets/user.png"
import { AuthContext } from '../Contexts/AuthContext';


const Navbar = () => {
    const {user,LogOut}=useContext(AuthContext);
    

    const handleLogOut=()=>{
LogOut().then(()=>{
  alert("Logget Out succesfull");
}).catch((err)=>console.log(err));
    }
    return (

        <div className='flex justify-between'>
                {/* {import.meta.env.VITE_pass} */}
           <div className='nav flex gap-3 text-accent font-semibold' >
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/career'}>Career</NavLink>
           </div>
           <div className='login-btn  flex  gap-4 items-center'>
             <img className='w-12' src={`${user ?  user.photoURL : userimg}`}></img>
             {user ? <button onClick={handleLogOut}  className='btn btn-primary px-6'>LogOut</button> : <Link to={'/auth/login'} className='btn btn-primary px-6'>Login</Link>}
            
           </div>
        </div>
    );
};

export default Navbar;