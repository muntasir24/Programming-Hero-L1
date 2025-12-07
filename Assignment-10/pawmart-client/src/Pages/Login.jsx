import React, { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import RegisterSpinner from "../Spinner/RegisterSpinner";
import { AuthContext } from "../Contexts/AuthContext";
import { BiSolidError } from "react-icons/bi";
const Login = ({closeModal}) => {
  const { setUser, SignInUserGoogle, SignInUser, loading } =
    useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const [err, setErr] = useState("");
  const handleToggle = () => {
    setToggle(!toggle);
  };


  const handleLogin=(e)=>{
    setErr("");
    e.preventDefault();
    const pass=e.target.pass.value;
    const email=e.target.email.value;
   SignInUser(email,pass)
   .then(data=>{
    // console.log(data.user);
    closeModal();
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
  setErr(message);
   })
  }

  const googleSignIn=()=>{
    SignInUserGoogle()
    .then(res=>{
        setUser(res.user);
        // console.log(res.user);
        closeModal();
    })
  }

  return (
    <div className="space-y-4">
  {err && <div className="text-red-500 p-3 rounded-2xl mb-2 bg-red-100 flex justify-center items-center gap-3"> <BiSolidError></BiSolidError> {err} </div>}
      <form onSubmit={handleLogin}>
        <input name="email"
          type="email"
          placeholder="Email Address"
          className="input text-base-content font-bold input-bordered w-full mb-4 "
        />
        <div className=" relative ">
          <input
            name="pass"
            required
            type={toggle ? "password" : "text"}
            placeholder="Password"
            className="input text-base-content font-bold input-bordered w-full mb-3"
          />
         
          <div
            className="text-black absolute top-1/6 right-1 z-20 cursor-pointer"
            onClick={handleToggle}
          >
            {!toggle ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
          </div>
        </div>
        {loading ? (
          <RegisterSpinner></RegisterSpinner>
        ) : (
          <input
            type="submit"
            value="Log In"
            className="btn btn-primary w-full"
          />
        )}
      </form>
      <div className="divider text-gray-600">OR</div>
      {/* Google */}
      <button onClick={googleSignIn} className="btn w-full bg-gray-200 text-black border-[#e5e5e5]">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <p className="text-gray-500 text-center hover:underline cursor-pointer">
        Forget Password ?
      </p>
    </div>
  );
};

export default Login;

//    <h3 className="text-xl font-bold mb-3">Login</h3>
//             <input type="email" placeholder="Email" className="input input-bordered w-full mb-3" />
//             <input type="password" placeholder="Password" className="input input-bordered w-full mb-3" />
//             <button className="btn btn-success w-full mt-2">Login</button>
