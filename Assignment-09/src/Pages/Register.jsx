import React, { useContext, useState } from "react";
import login from "../assets/login.webp";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { BiErrorAlt } from "react-icons/bi";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [errcreate, setErrcreate] = useState("");
  const [password, setPassword] = useState("");
  const { signUpwithEmail, setUser, updateUser,handleGoogleSignin } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // console.log(signUpwithEmail);
  // console.log(user?.email);


  const handlePassOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // console.log(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const minLength = value.length >= 6;

    if (!hasUpper) {
      setErr("Password must contain at least one UPPERCASE letter!");
    } else if (!hasLower) {
      setErr("Password must contain at least one lowercase letter!");
    } else if (!minLength) {
      setErr("Password must be at least 6 characters long!");
    } else {
      setErr("");
    }
  };

  const togglePass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e?.target?.photourl?.value;
    const pass = e.target.pass.value;
    if (err.length) return;
    //start
 setErrcreate('');
    signUpwithEmail(email, pass)
      .then((data) => {
        const userf = data.user;
        updateUser({ displayName: name, photoURL: photourl })
          .then(() => {
            setUser({ ...userf, displayName: name, photoURL: photourl });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setUser(userf);
           
          });
      })
      .catch((error) => {
       let message = "";
        // setLoading(false);
       switch (error.code) {
    case "auth/email-already-in-use":
      message = "This email is already in use.";
      break;
    case "auth/network-request-failed":
      message = "Network error, please try again.";
      break;
    default:
      message = "Failed to create account. Please try again.";
  }

  setErrcreate(message);  

      })
      
      

    // console.log(user);
  };

const googleSignin=()=>{
  handleGoogleSignin()
  .then(res=>{
    const user=res.user;
setUser(user)
navigate('/')
  })
  .catch(err=>{
    console.log(err);
  })
}

  return (
    <div className=" flex max-w-6xl mx-auto mt-10 gap-10">
      <div className=" hidden md:flex md:w-1/2">
        <img src={login} alt="" />
      </div>
      <div className="  p-10 md:w-1/2">
        <h2 className="text-center font-semibold text-3xl text-gray-700">
          Sign up with email
        </h2>
        {/* <div>errrr</div> */}
        {errcreate && <div className="mt-5 rounded-lg py-5 font-bold bg-red-200 flex gap-2 justify-center items-center"><BiErrorAlt size={30} color="red" /> {errcreate} </div>}

        <div className=" flex flex-col justify-center items-center pt-5">
          <form onSubmit={handleRegister} className="">
            <input
              required
              name="name"
              type="text"
              className="input mb-5  focus:ring-0 outline-0 focus:border-violet-500 w-full h-14 px-4"
              placeholder="Name"
            />

            <input
              required
              name="email"
              type="email"
              className="input mb-5 focus:ring-0 outline-0 focus:border-violet-500 w-full h-14 px-4"
              placeholder="Email"
            />
            <input
              required
              name="photourl"
              type="text"
              className="input mb-5 focus:ring-0 outline-0 focus:border-violet-500 w-full h-14 px-4"
              placeholder="Photo URL"
            />
            {/* passwor field  */}
            <div className="relative ">
              <input
                onChange={handlePassOnChange}
                defaultValue={password}
                required
                name="pass"
                type={showPassword ? "text" : "password"}
                className="input focus:ring-0 outline-0 focus:border-violet-500  w-full h-14 px-4"
                placeholder="Password"
              />
              <div
                onClick={togglePass}
                className="z-10 absolute top-1/3 right-2"
              >
                {showPassword ? <Eye></Eye> : <EyeOff />}
              </div>
            </div>
            {err && <p className="text-red-500 text-sm">{err}</p>}
            <button className="btn btn-primary w-full mt-4">Continue</button>
          </form>
        </div>
        {/* other login  */}
        <div className="divider pt-5 text-gray-500">Other sign up option</div>
        <button onClick={googleSignin} className="btn w-full  bg-violet-50 text-black border border-violet-500">
          <svg
            aria-label="Google logo"
            width="22"
            height="22"
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
          Sign up with Google
        </button>
        <div className="mt-5 px-10 py-4 bg-gray-300 border border-gray-200 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-[#6b28d1] font-bold underline"
          >
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
