import React, { useContext, useState } from 'react';
import login from '../assets/login.webp'
import { Link, Navigate, useLocation, useNavigate, } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { BiErrorAlt } from 'react-icons/bi';
import GlobalSpinner from '../Spinner/GlobalSpinner';
// import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';

const Login = () => {

    const { signInwithEmail,handleGoogleSignin,setUser,}=useContext(AuthContext);
   
const location=useLocation();
const navigate=useNavigate();
const [email,setEmail]=useState('');

// console.log(location);
      const [errcreate, setErrcreate] = useState("");
 
    const handleLogin=(e)=>{
        e.preventDefault();
        // setErrcreate('');
        const pass=e.target.pass.value;
        const email=e.target.email.value;
        // console.log(email,pass);
         signInwithEmail(email,pass)
         .then(data=>{
            const user=data.user;
            // console.log(user);
            
        {  navigate(location?.state?.title || '/' ,{
      state: {
        id: location?.state?.id,   // forward the data you received
        from: "login page"
      }
    } ) }
         })
         .catch(error=>{
            let message = "";
            
            console.log(error);
       switch (error.code) {
    case "auth/invalid-credential":
      message = "Please Enter Corret Email/Password";
      break;
    case "auth/network-request-failed":
      message = "Network error, please try again.";
      break;
    default:
      message = "Failed to Login account. Please try again.";
  }
   setErrcreate(message);
//  setLoading(false); 
 

 
         })

    }
const googleSignin=()=>{
  handleGoogleSignin()
  .then(res=>{
    const user=res.user;
setUser(user)

            {  {  navigate(location?.state?.title || '/' ,{
      state: {
        id: location?.state?.id,   // forward the data you received
        from: "login page"
      }
    } ) }}
  })
  .catch(err=>{
    console.log(err);
  })
}


const handleForgetPass = () => {
  const targetEmail = email?.trim() === "" ? "example@mail.com" : email;

  navigate(`/auth/forget/${targetEmail}`);
};


    return (
        <div className=' flex max-w-6xl mx-auto mt-10 gap-10'>
    <div className='hidden md:flex md:w-1/2'> 
    <img src={login} alt="" />
    </div>
    <div className='  p-10 md:w-1/2'>
      <h2 className='text-center font-semibold text-3xl text-gray-700'>Log in to continue your <br />learning Journey</h2>

{errcreate && <div className="mt-5 rounded-lg py-5 font-bold bg-red-200 flex gap-2 justify-center items-center"><BiErrorAlt size={30} color="red" /> {errcreate} </div>}

      <div className=" flex flex-col justify-center items-center pt-5">
      <form onSubmit={handleLogin}  className='space-y-5'>
         
          <input defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required name='email' type="email" className="input focus:ring-0 outline-0 focus:border-violet-500  w-full h-14 px-4" placeholder="Email" />
          <input required name='pass' type="password" className="input focus:ring-0 outline-0 focus:border-violet-500 w-full h-14 px-4" placeholder="Password" />
          <div><a onClick={handleForgetPass} className="link link-hover hover:text-blue-500">Forgot password?</a></div>
          <button className="btn btn-primary w-full mt-4">Continue</button>
       
      </form>
      </div>
      {/* other login  */}
       <div className="divider pt-5 text-gray-500">OR</div>
       <button onClick={googleSignin} className="btn w-full  bg-violet-50 text-black border border-violet-400">
  <svg aria-label="Google logo" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

    <div className='mt-5 px-10 py-4 bg-gray-300 border border-gray-200 text-center text-sm text-gray-700' >
        Don't have an account? <Link to={'/auth/register'} className='text-[#6b28d1] font-bold underline'> Sign Up</Link></div>
    </div>

  </div>
    );
};

export default Login;