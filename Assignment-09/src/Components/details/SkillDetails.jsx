import 'aos/dist/aos.css'; 
import Aos from 'aos';
import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import useSkillData from '../../Hooks/useSkillData';
import GlobalSpinner from '../../Spinner/GlobalSpinner';
import UpperCard from './UpperCard';
import ButtonWrapper from '../ButtonWrapper';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext';
const fakeSave = () => {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const success = true; 

      if (success) resolve();
      else reject();
    }, 1000); 
  });
};

const SkillDetails = () => {
  const {loadingUser}=useContext(AuthContext);

    const location=useLocation();
    const id=location?.state?.id;
    // console.log(location);
    const {skillData,loading}=useSkillData();
if( loading) return <GlobalSpinner></GlobalSpinner>

  const skill=skillData.find(s=>s.skillId===Number(id));
  // console.log(location);
  // console.log(skill,id);
  const{rating,slotsAvailable,description,providerName}=skill;


    Aos.init({ duration: 900, easing: "ease-in-out" , });
  
    const handleButton=(e)=>{
      e.preventDefault();
     e.target.reset();
     toast.promise(
    fakeSave(),
    {
      loading: "Processing..",
      success: <b>Session Booked with {providerName}</b>,
      error: <b>Could not</b>,
    }
  );
    }

    return (
        
      <div className=''>
      
       { <UpperCard skill={skill}></UpperCard>}
       <div className="space-y-2 pt-10">

  {/* Box 1 - Description */}
  <div className="text-left">
    <div
      data-aos="flip-right"
      className="p-15 rounded-xl border border-cyan-200 inline-block text-xl font-semibold w-fit bg-cyan-50 shadow"
    >
      <h2 className="text-2xl font-bold mb-2 text-cyan-400">About</h2>
      <p className="text-gray-600 text-base font-normal max-w-xl">
        {description}
      </p>
    </div>
  </div>

  {/* Box 2 - Rating */}
  <div className="text-right">
    <div
      data-aos="fade-up-left"
      className="p-8 border-cyan-200 rounded-xl border inline-block text-xl font-semibold w-fit bg-cyan-50 shadow text-left"
    >
      <h2 className="text-2xl font-bold mb-2 text-cyan-400">Rating</h2>

      {/* Stars */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-yellow-500 text-3xl">
          {"★".repeat(Math.floor(rating))}
        </span>
        <span className="text-gray-400 text-3xl">
          {"★".repeat(5 - Math.floor(rating))}
        </span>
      </div>

      <p className="text-gray-600 text-base font-normal">
        People love it! Rating {rating} out of 5 ⭐
      </p>
    </div>
  </div>

  {/* Box 3 - Slots */}
  <div className="text-left">
    <div
      data-aos="fade-up-right"
      className="p-8 border-cyan-200-200  rounded-xl border border-red-200 inline-block text-xl font-semibold w-fit bg-red-50 shadow"
    >
      <h2 className="text-2xl font-bold mb-2 text-red-400">Slots Left</h2>

      <p className="text-red-400  font-bold text-lg">
        Hurry up! Only {slotsAvailable} slot(s) left!
      </p>
    </div>
  </div>

</div>
<div className='pt-10  flex justify-center '>
  <div className="card w-full  shrink-0 ">
      <div className="card-body">
        <form onSubmit={handleButton} className='fieldset  flex flex-col justify-center items-center'>
          
          <input type="name" className="input" placeholder="Your Name" />
         
          <input type="email" className="input" placeholder="Email" />

          <button className="btn btn-neutral mt-4">Book Session Now</button>
        </form>
      </div>
    </div>
</div>



      </div>
    );
};

export default SkillDetails;