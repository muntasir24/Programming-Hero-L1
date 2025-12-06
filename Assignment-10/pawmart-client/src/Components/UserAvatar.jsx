import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import photo from '../assets/avatar.png'
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router';

const UserAvatar = () => {
    const {user,SignOutUser}=useContext(AuthContext);
    // console.log(user);
const handleLogOut=()=>{
    SignOutUser();
}  

    return (
       <div className="dropdown dropdown-end mr-5 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
           data-tooltip-id="my-tooltip"
  data-tooltip-content={user?.displayName}
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL || user?.providerData[0]?.photoURL ||photo} />
            <Tooltip id="my-tooltip" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between font-bold">
            Profile
          </a>
        </li>
        <li> <Link to={'myorders'}>My Orders</Link></li>
      
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>
    );
};

export default UserAvatar;