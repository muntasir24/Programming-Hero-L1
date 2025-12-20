import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import RegisterSpinner from '../Spinner/RegisterSpinner';
import Swal from 'sweetalert2';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";

const Register = ({ closeModal }) => {
const{ SignUpUser,setUser, SignInUserGoogle,updateUser,loading,user, setLoading}=useContext(AuthContext);
const [toggle,setToggle]=useState(true);
const [err,setErr]=useState("");
const [password,setPassword]=useState("");
const handleToggle=()=>{
    setToggle(!toggle);
}
const handlePassOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // console.log(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const minLength = value.length >= 6;

    if (!hasUpper) {
      setErr("Password must contain at least one uppercase letter!");
    } else if (!hasLower) {
      setErr("Password must contain at least one lowercase letter!");
    } else if (!minLength) {
      setErr("Password must be at least 6 characters long!");
    } else {
      setErr("");
    }
  };

const handleGoogleSignIn=()=>{
    SignInUserGoogle()
    .then(res=>{
        setUser(res.user);
        closeModal();
    })
}

const handleEmailSignUp = (e) => {
  e.preventDefault();


  const name = e.target.name.value;
  const email = e.target.email.value;
  const pass = e.target.pass.value;
  const photo=e.target.photo.value;

  if(err.length)return;
  setErr('');

  SignUpUser(email, pass)
    .then((data) => {
      const userRef = data.user;

      return updateUser({ displayName: name })
        .then(() => {
          setUser({ ...userRef, displayName: name ,photoURL:photo });

          Swal.fire({
         
          
            title: "Success!",
            text: "Account created successfully",
            icon: "success",
          });
             setLoading(false);
          closeModal();  // only success close
        });
    })
    .catch((err) => {
      console.log("Firebase Error:", err.code);

      if (err.code === "auth/email-already-in-use") {
      closeModal();
       setLoading(false);
         Swal.fire({
  
  title: "Error!",
  text: "Email Already in Use",
  icon: "error",
 
});

        
     
      } else {
        Swal.fire({
           
          title: "Error!",
          text: "Network Failed",
          icon: "error",
        });
        closeModal();
      }
    })
   
};

// console.log(user);
    return (
       <div className='space-y-4'>
            {/* <p className='text-black'>Wrong pass</p> */}
         

            <form  onSubmit={handleEmailSignUp}>
                <input name='name' type="text" placeholder="Full Name" className="input text-base-content font-bold input-bordered w-full mb-4 " />
                <input name='photo' type="text" placeholder=" photo URL" className="input text-base-content font-bold input-bordered w-full mb-4 " />
                <input name='email' type="email" placeholder="Email Address" className="input text-base-content font-bold input-bordered w-full mb-4 " />
            <div  className=' relative '>
                <input name='pass' defaultValue={password} required onChange={handlePassOnChange}  type={toggle ? "password" :"text"} placeholder="Password" className="input text-base-content font-bold input-bordered w-full mb-3" />
                   {err && <div className="rounded-lg text-sm text-red-500 flex gap-2 justify-center items-center mb-2">{err} </div>}
                <div className='text-black absolute top-1/6 right-1 z-20 cursor-pointer' onClick={handleToggle} >{!toggle?  <FaRegEye size={20} />:  <FaRegEyeSlash  size={20}/> }</div>
            </div>
   {loading ?<RegisterSpinner></RegisterSpinner> : <input type="submit" value="Sign Up"  className='btn btn-primary w-full' />}
            </form>
              <div className="divider text-gray-600">OR</div>
              {/* Google */}
<button onClick={handleGoogleSignIn} className="btn w-full bg-gray-200 text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button>

            
        </div>
    );
};

export default Register;