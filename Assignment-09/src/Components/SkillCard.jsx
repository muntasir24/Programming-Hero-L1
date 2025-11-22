import { Star, StarHalf, StarOff } from 'lucide-react';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TiStarHalfOutline } from 'react-icons/ti';
import * as motion from "motion/react-client"
import { useNavigate } from 'react-router';

const SkillCard = ({skill}) => {
    const {image,skillName,rating,price}=skill;
const navigate=useNavigate();
const slug=skillName.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"");
const handleNavigate=()=>{
    navigate(`/details/${slug}`,{state:{id:skill.skillId}});
}

    motion
    return (
      <motion.div 
  initial={{ opacity: 0, scale: 0.7, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
        <div className="card bg-base-100  shadow-sm">
  <figure className=''>
    <img className='  h-55  object-cover'
      src={image}
      alt="Shoes" />
    
  </figure>
  {/* Rating */}
<div className="flex   items-center gap-2 mt-2 px-4 ">
  <div className="flex items-center gap-1">
  {[...Array(5)].map((_, i) => {
    const full = i+0.7< rating;          // full stars

    return full ? (
        <FaStar key={i} className='text-yellow-500' />

    ) : 
        <FaStarHalfAlt key={i}  className='text-yellow-500'></FaStarHalfAlt>

    
  })}

</div>


  <span className="ml-2 text-sm  border border-blue-400 text-blue-600 bg-blue-200  px-1 rounded-lg">
    {rating} out of 5
  </span>
</div>

  <div className="card-body ">
    <h2 className="card-title lg:whitespace-nowrap ">{skillName}</h2>
    
    <div className=" flex justify-between ">
        <p className='font-bold text-3xl text-left text-[#C9B59C]'>$ {price}</p>
      <button onClick={()=>handleNavigate()} className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
      </motion.div>
    )
};

export default SkillCard;