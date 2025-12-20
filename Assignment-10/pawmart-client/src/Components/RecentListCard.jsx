import React from 'react';
import { Link } from 'react-router';
import { MapPin, PawPrint } from 'lucide-react';
import { motion } from "motion/react"


const RecentListCard = ({data}) => {
    
    const{_id,category,image,name,price,location}=data
    motion
    return (
        
     <motion.div  
   
     className='  group relative card bg-transparent hover:bg-white  listcard hover:shadow-xl hover:-translate-y-1 transition-all duration-300 '>
{/* image */}
<figure className='overflow-hidden '>
    <img alt={name} className='w-1/2 pt-2 rounded-2xl h-70 object-cover hover:scale-110 transition duration-500' src={image}  />
</figure> 
{/* contents */}
<div className='px-7 pb-2 space-y-3'>
    {/* name */}
    <h2 className='card-title text-primary font-bold'> {name}  </h2>

    {/* category +location  */}
    <div className='flex  justify-between text-sm opacity-80 text-center'>
        <p className='font-semibold flex items-center gap-2'><PawPrint size={19} color='red'></PawPrint> {category}</p>
        <p className='flex items-center gap-1'>  <MapPin size={19} color='#23a683'/> {location}</p>
    </div>

    {/* price section */}
    <div className='text-lg font-semibold text-secondary text-center '>
        { price===0 ? "Free for Adoption":(<div className='flex justify-center gap-2'><p className='text-gray-400 opacity-85 line-through'>৳ {price-30}</p> ৳ {price}</div>)}
    </div>

    {/* Hover Button */}
       <div className='relative h-12'>
         <Link to={`/listingDetails/${_id}`}
         
          className="text-center absolute left-1/2  -translate-x-1/2 opacity-0  group-hover:opacity-100 
                     bg-primary text-white px-5 py-2  text-sm shadow-lg
                     transition-all duration-300"
        >
        SEE DETAILS
        </Link>
       </div>

</div>

     </motion.div>
        
    );
};

export default RecentListCard;