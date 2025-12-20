import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff, X } from 'lucide-react'; 
import { BiErrorAlt } from 'react-icons/bi';
import reg from "../assets/authImage.jpg";
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import AuthSpinner from '../Spinner/AuthSpinner';
import useAxios from '../Hooks/useAxios';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const Register = () => {
  const {signUpWithEmail,updateUser,fetchRole}=useContext(AuthContext);
  const axiosPublic=useAxios();
  const [err, setErr] = useState("");
  const [errcreate, setErrcreate] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jsonloading, setjsonLoading] = useState(true);
  const navigate=useNavigate();
  const [districts,setDistricts] = useState([])
  const [upazilas,setUpazilas] =useState([]);
   // Constants for Selectors
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

useEffect(() => {
  const fetchLocationData = async () => {
    setjsonLoading(true); // Start spinner
    try {
      // Fetch both files simultaneously for better performance
      const [upazilaRes, districtRes] = await Promise.all([
        axios.get('/upazilla.json'),
        axios.get('/district.json')
      ]);

      // 1. Set Upazilas 
      // Note: Check your JSON structure. 
      // If it's an array of objects, use .map() to get names.
      const upazilaData = upazilaRes.data.upazilas;
      setUpazilas(upazilaData); 
      console.log("Upazilas loaded:", upazilaData);

      // 2. Set Districts
      const districtData = districtRes.data.districts;
      setDistricts(districtData);
      console.log("Districts loaded:", districtData);

    } catch (err) {
      console.error("Failed to load location data:", err);
      // Optional: set an error state to show the user
      // setErr("Could not load regions. Please refresh.");
    } finally {
      setjsonLoading(false); // Stop spinner regardless of success or failure
    }
  };

  fetchLocationData();
}, []);


if(jsonloading) return <GlobalSpinner></GlobalSpinner>
// console.log(upazilas[0].name);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary local URL for the selected file to show preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePassOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const minLength = value.length >= 6;

    if (!hasUpper) setErr("Password must contain at least one UPPERCASE letter!");
    else if (!hasLower) setErr("Password must contain at least one lowercase letter!");
    else if (!minLength) setErr("Password must be at least 6 characters long!");
    else setErr("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrcreate('');
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const pass = form.pass.value;
    const confirmPass = form.confirm_pass.value;
    const image = form.avatar.files[0];

    if (pass !== confirmPass) {
      setErrcreate("Passwords do not match!");
      return;
    }

    if (err) return;

   setLoading(true);
   try {
    // 1. UPLOAD IMAGE
    const formData = new FormData();
    formData.append('image', image);
    const imgbb_api_key = 'ac2da857b9f5f3e41305875e69d70c51';
    
    const imgRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`, 
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ).catch(() => { throw new Error(" Failed to upload profile picture.") });

    const avatarUrl = imgRes.data.data.display_url;

    // 2. FIREBASE SIGN UP
    const result = await signUpWithEmail(email, pass)
      .catch((error) => { 
        if(error.code === 'auth/email-already-in-use') throw new Error("This email is already registered.");
        throw new Error("Failed to create account.");
      });
      console.log(result);
    // 3. UPDATE FIREBASE PROFILE
    await updateUser({
      displayName: name,
      photoURL: avatarUrl
    }).catch(() => { throw new Error("Failed to set  photo on your profile.") });

    // 4. DATABASE SYNC
    const newUser = {
      name,
      email,
      pass,
      avatar: avatarUrl,
      bloodGroup,
      district,
      upazila,

    };

    await axiosPublic.post('/users', newUser)
      .catch(() => { throw new Error("Account Creation Failed Please try Again") });
      
      await fetchRole(email);

    // SUCCESS
    navigate('/');

  } catch (error) {
    // This will set the specific error message from whichever step failed
    setErrcreate(error.message);
    console.error("Registration Error Context:", error);
  } finally {
    setLoading(false);
  }
    
  };

  return (
   <>
   {loading && <AuthSpinner></AuthSpinner>}
    <div className="flex max-w-6xl mx-auto mt-10 gap-10 mb-10">
      <div className="hidden md:flex md:w-1/2">
        <img src={reg} alt="Auth" className="rounded-lg object-cover" />
      </div>
      
      <div className="p-10 md:w-1/2">
        <h2 className="text-center font-semibold text-3xl text-gray-700 mb-6">
          Sign up with email
        </h2>

        {errcreate && (
          <div className="mb-5 rounded-lg py-4 font-bold bg-red-100 text-red-700 flex gap-2 justify-center items-center border border-red-200">
            <BiErrorAlt size={24} /> {errcreate}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input required name="name" type="text" placeholder="Name" className="input border w-full h-12 px-4 rounded-md" />
          <input required name="email" type="email" placeholder="Email" className="input border w-full h-12 px-4 rounded-md" />

          {/* Avatar Field with Live Preview */}
          <div className="form-control">
            <label className="text-sm font-medium text-gray-600 mb-1 block">Profile Picture</label>
            
            {imagePreview && (
              <div className="relative w-24 h-24 mb-3 mx-auto">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#6b28d1]" 
                />
                <button 
                  type="button" 
                  onClick={() => {setImagePreview(null); document.getElementsByName('avatar')[0].value = '';}}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-lg"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <input 
              required 
              name="avatar" 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer" 
            />
          </div>

          <select required name="bloodGroup" className="select border w-full h-12 px-4 rounded-md bg-white">
            <option value="">Select Blood Group</option>
            {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
          </select>

          <div className="grid grid-cols-2 gap-4">
            <select required name="district" className="select border h-12 px-4 rounded-md bg-white">
              <option value="">District</option>
              {districts.map(d => <option key={d.id} value={d}>{d.name}</option>)}
            </select>
            <select required name="upazila" className="select border h-12 px-4 rounded-md bg-white">
              <option value="">Upazila</option>
              {upazilas.map(u => <option key={u.id} value={u}>{u.name}</option>)}
            </select>
          </div>

          <div className="relative">
            <input
              onChange={handlePassOnChange}
              required
              name="pass"
              type={showPassword ? "text" : "password"}
              className="input border w-full h-12 px-4 rounded-md"
              placeholder="Password"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-500">
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>

          <div className="relative">
            <input
              required
              name="confirm_pass"
              type={showConfirmPassword ? "text" : "password"}
              className="input border w-full h-12 px-4 rounded-md"
              placeholder="Confirm Password"
            />
            <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-500">
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>

          {err && <p className="text-red-500 text-xs mt-1">{err}</p>}

          <button className="btn bg-[#6b28d1] hover:bg-[#5a21b1] text-white w-full h-12 rounded-md font-bold mt-4 transition-colors">
            Continue
          </button>
        </form>

        <div className="mt-8 py-4 bg-gray-50 border border-gray-200 text-center text-sm text-gray-700 rounded-md">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="text-[#6b28d1] font-bold underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;