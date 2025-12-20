import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';
import React from 'react';
import './Showcard.css'
import { useNavigate } from 'react-router';
const ShowCard = ({ fapps }) => {
  // console.log(fapps);
  motion
  const { title, ratingAvg, downloads, image,id } = fapps;
  const navigate = useNavigate();
const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const handleNavigation=() => {
    navigate(`/app/${slug}`,{state:{id:id}});
  }

    return (
      <motion.div onClick={()=>handleNavigation()} whileHover={{scale:1.05 }} transition={{duration:0.2}} whileTap={{scale:0.97}}  className="app-card cursor-pointer card bg-base-100  shadow-sm overflow-hidden">
        <figure className='md:h-72 h-80 w-full overflow-hidden p-5 bg-amber-50 app-img'>
          <img className='object-cover w-full h-full rounded-2xl'
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="flex justify-between items-center">
            <div className="bg-green-100 text-green-500 py-1 px-2  flex gap-2 items-center rounded-xl">
              <Download size={13} />
              {downloads}
            </div>
            <div className="bg-orange-100 text-orange-500 py-1 px-2 rounded-xl flex gap-2  text-sm items-center">
              <Star size={13} />
              {ratingAvg}
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default ShowCard;