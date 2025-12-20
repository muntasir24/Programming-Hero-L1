import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import useAxios from '../../Hooks/useAxios';

import { 
  Droplets, 
  MapPin, 
  Hospital, 
  Calendar, 
  Clock, 
  MessageSquare, 
  User, 
  Mail,
  Send
} from 'lucide-react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const AddRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const axiosPrivate=useAxiosSecure();
  
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Location Data
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const [distRes, upazRes] = await Promise.all([
          axios.get('/district.json'),
          axios.get('/upazilla.json')
        ]);
        setDistricts(distRes.data.districts);
        setUpazilas(upazRes.data.upazilas);
      } catch (err) {
        console.error("Error loading locations", err);
      }
    };
    fetchLocations();
  }, [axiosPublic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const requestData = {
      requesterName: user?.displayName,
      requesterEmail: user?.email,
      recipientName: form.recipientName.value,
      district: form.district.value,
      upazila: form.upazila.value,
      hospitalName: form.hospitalName.value,
      fullAddress: form.fullAddress.value,
      bloodGroup: form.bloodGroup.value,
      donationDate: form.donationDate.value,
      donationTime: form.donationTime.value,
      message: form.message.value,
      status: 'pending', // Default value
      createdAt: new Date()
    };

    console.log(requestData);
    
    // Add your axios.post logic here to save to MongoDB
      try{
        const result= await axiosPrivate.post('/requests',requestData)
console.log(result);
    Swal.fire({
      title: 'Success!',
      text: 'Donation request created successfully',
      icon: 'success',
      confirmButtonColor: '#dc2626'
    });
      }
      catch(err){
        console.log(err);
    Swal.fire({
      title: 'Error!',
      text: 'Failed To make request',
      icon: 'error',
      confirmButtonColor: '#dc2626'
    });
      }

  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-red-100 border border-red-50 overflow-hidden">
        
        {/* Form Header */}
        <div className="bg-red-600 p-8 text-center">
          <div className="inline-flex p-3 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
            <Droplets className="text-white" size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">Post a Blood Request</h2>
          <p className="text-red-100 mt-2 font-medium">Fill in the details to find a hero near you</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
          
          {/* Section 1: Requester Info (Read Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1 flex items-center gap-2">
                <User size={14} /> Requester Name
              </label>
              <input 
                readOnly 
                value={user?.displayName || ''} 
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-500 font-semibold focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1 flex items-center gap-2">
                <Mail size={14} /> Requester Email
              </label>
              <input 
                readOnly 
                value={user?.email || ''} 
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-500 font-semibold focus:outline-none"
              />
            </div>
          </div>

          {/* Section 2: Recipient & Blood Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Recipient Name</label>
              <input required name="recipientName" type="text" placeholder="Who needs blood?" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-50 outline-none transition-all" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Blood Group Needed</label>
              <select required name="bloodGroup" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none bg-white">
                <option value="">Select Group</option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 3: Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <MapPin size={16} className="text-red-500" /> District
              </label>
              <select required name="district" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none bg-white">
                <option value="">Select District</option>
                {districts.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <MapPin size={16} className="text-red-500" /> Upazila
              </label>
              <select required name="upazila" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none bg-white">
                <option value="">Select Upazila</option>
                {upazilas.map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
              </select>
            </div>
          </div>

          {/* Section 4: Hospital & Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <Hospital size={16} className="text-red-500" /> Hospital Name
              </label>
              <input required name="hospitalName" type="text" placeholder="e.g. Dhaka Medical College" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Full Address Line</label>
              <input required name="fullAddress" type="text" placeholder="e.g. Zahir Raihan Rd, Dhaka" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none" />
            </div>
          </div>

          {/* Section 5: Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <Calendar size={16} className="text-red-500" /> Donation Date
              </label>
              <input required name="donationDate" type="date" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <Clock size={16} className="text-red-500" /> Donation Time
              </label>
              <input required name="donationTime" type="time" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-red-400 outline-none" />
            </div>
          </div>

          {/* Section 6: Request Message */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
              <MessageSquare size={16} className="text-red-500" /> Why do you need blood?
            </label>
            <textarea 
              required 
              name="message" 
              rows="4" 
              placeholder="Provide details about the patient's condition and urgency..." 
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-red-400 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-200 flex items-center justify-center gap-3 transition-all active:scale-95 group"
          >
            <span>Send Donation Request</span>
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddRequest;