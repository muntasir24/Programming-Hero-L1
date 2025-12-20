import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';


const Register = () => {
  const navigate=useNavigate();
  const { createUser,setUser,updateUser}=useContext(AuthContext);
   const[err,setErr]=useState('');
const handleRegister =(e)=>{
    e.preventDefault();
    // console.log(e.target);
    setErr('');
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const pass=e.target.pass.value;
    // console.log(pass);
    if(name.length<5){
      setErr("name must be 10 charecter");
      return;
    }
    // console.log(name,photo,email,pass);
    createUser(email,pass)
    .then((res)=>{
      const user=res.user;
      
      
      updateUser({displayName:name,photoURL:photo}).then(()=>{
setUser({...user,displayName:name,photoURL:photo});
navigate('/');

      }).catch((err)=>{
        console.log(err);
        setUser(user);
       
      })

    })
    .catch((err)=>{
      console.log(err.message);
    });
    
}

    return (
       <div  className='flex justify-center border min-h-screen items-center'>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-center py-5'>Register your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* name */}
   <label className="label">Name</label>
          <input required  name='name' type="text" className="input" placeholder="Your Name" />
          {err && <p className='text-red-400'>{err}</p>}

{/* photo url */}
   <label className="label">Photo URL</label>
          <input required name='photo' type="text" className="input" placeholder="photo url" />

          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='pass' type="password" className="input" placeholder="Password" />
        
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
           <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary  underline' to={'/auth/login'}>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;