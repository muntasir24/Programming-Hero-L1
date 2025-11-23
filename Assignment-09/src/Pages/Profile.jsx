import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';


const Profile = () => {
    const {user,setUser,updateUser}=useContext(AuthContext);
    const [isopen,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!isopen);
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photourl=e.target.photourl.value;
        // console.log(name,photourl);
        updateUser({ displayName: name, photoURL: photourl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photourl });
          })
          .catch((err) => {
            console.log(err);
           
          });

    }
    console.log(user?.providerData[0]?.photoURL);
    return (
        <>
            <Navbar></Navbar>
         <div className='p-4 py-10 bg-violet-200 '>
        <div className='max-w-6xl mx-auto  relative '>
            <div className=' '>
                <p className='font-semibold '>LEARNER</p>
            <h1 className='font-bold text-4xl text-gray-700'>{user?.displayName}</h1>
            </div>
            <div className=' shadow-2xl card p-10  bg-white flex flex-col justify-between items-center gap-4  absolute top-[-5] md:top-0 right-0'>
                <img className='w-30 h-30 object-cover rounded-full' src={user?.photoURL || user?.providerData[0]?.photoURL} alt="" />
                <p className='text-gray-600 text-lg text-center'>{user?.email}</p>
                <button onClick={handleOpen}  className='p-3  text-violet-600 font-semibold cursor-pointer  text-sm px-20 w-full border border-violet-500 rounded-2xl'>Update Profile</button>
                {
                    isopen &&( <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input name='photourl' type="text" className="input" placeholder="photo URL" />
          
          <button className="btn btn-neutral mt-4">Update</button>
        </form>)
                }
            </div>
        </div>
         </div>
        </>
    );
};

export default Profile;