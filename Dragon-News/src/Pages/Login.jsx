import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
 
  const {LogIn}=useContext(AuthContext);
  const location=useLocation();
  const navigate =useNavigate();
  // console.log(location);
  const[err,setErr]=useState('');
  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const pass=e.target.pass.value;
    // console.log(email, pass);
   LogIn(email,pass).then(()=>{
    // console.log(res.user);
    // alert("login sucess");
    navigate(location.state ? location.state :"/")

   }).catch(err=>setErr(err.code));
  }

    return (
        <div  className='flex justify-center border min-h-screen items-center'>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-center py-5'>Login your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label" re>Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='pass' type="password" className="input" placeholder="Password" />
        
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-red-500'>{err}</p>
           <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary  underline' to={'/auth/register'}>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;