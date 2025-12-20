import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react'; 
import { BiErrorAlt } from 'react-icons/bi';
import loginImg from "../assets/authImage.jpg";
import { AuthContext } from '../Contexts/AuthContext';
import GloabalSpinner from '../Spinner/GlobalSpinner';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    setLoading(true);
    try {
      await signInUser(email, pass)
        .catch((error) => {
          // Firebase specific error handling
          if (error.code === 'auth/invalid-credential') {
            throw new Error("Invalid email or password.");
          }
          throw new Error("Failed to sign in. Please check your credentials.");
        });

      // Redirect to home/dashboard on success
      navigate('/');
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <GloabalSpinner />}
      
      {/* Background is now a simple neutral gray/white instead of animated blood flow */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        
        {/* Same max-6xl Container for consistency */}
        <div className="flex max-w-5xl w-full mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left Side: Same Image */}
          <div className="hidden md:flex md:w-1/2 relative">
            <img src={loginImg} alt="Login" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent flex items-end p-10">
              <p className="text-white text-xl font-medium italic">"Welcome back, Hero. Ready to save more lives?"</p>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="p-8 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h2 className="font-bold text-4xl text-red-700 tracking-tight">
                Sign In
              </h2>
              <p className="text-gray-500 mt-2 font-medium">Access your donor dashboard</p>
            </div>

            {err && (
              <div className="mb-6 rounded-xl py-4 px-4 font-bold bg-red-50 text-red-700 flex gap-3 justify-center items-center border border-red-200">
                <BiErrorAlt size={24} className="shrink-0" /> 
                <span className="text-sm">{err}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
                <input 
                  required 
                  name="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="input border border-gray-200 focus:border-red-400 w-full h-14 px-4 rounded-xl transition-all outline-none" 
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">Password</label>
                <div className="relative">
                  <input
                    required
                    name="pass"
                    type={showPassword ? "text" : "password"}
                    className="input border border-gray-200 focus:border-red-400 w-full h-14 px-4 rounded-xl outline-none"
                    placeholder="••••••••"
                  />
                  <div 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Link to="/auth/forgot-password" size="sm" className="text-xs text-red-600 font-semibold hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button className="btn bg-red-600 hover:bg-red-700 text-white w-full h-14 rounded-2xl font-bold mt-4 shadow-lg shadow-red-100 transition-all active:scale-[0.98]">
                Sign In
              </button>
            </form>

            <div className="mt-10 py-4 bg-gray-50 border border-gray-100 text-center text-sm text-gray-600 rounded-2xl">
              New to the mission?{" "}
              <Link to={"/auth/register"} className="text-red-600 font-bold hover:underline">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;