import React from 'react';
import SpringCard from '../SpringCard';
const UpperCard = ({skill}) => {

  const{skillName,providerName,providerEmail,price,image,category}=skill;
    return (
        <div className='flex flex-col md:flex-row justify-between gap-5 border  bg-[#faece0] shadow-xl rounded-2xl p-6 py-14 border-[#c7e7ff]'>
       <div className='md:w-3/5  '>
         {
            <SpringCard image={image}></SpringCard>
        }
       </div>
        <div className="md:w-2/5 flex ">
  <div className=" w-full text-center flex flex-col ">
   <div className='flex-1 '>
     
    {/* Skill Name */}
    <h2 className="text-2xl font-bold text-gray-800 mb-3 ">
      {skillName}
    </h2>

    {/* Provider Name */}
    <div className="mb-2">
      <p className="text-sm text-gray-500 uppercase tracking-wide">Provider</p>
      <p className="text-lg font-semibold text-gray-700">{providerName}</p>
    </div>

    {/* Provider Email */}
    <div className="mb-2">
      <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
      <p className="text-lg font-medium text-blue-600 break-all">
        {providerEmail}
      </p>
    </div>

    {/* Category */}
    <div className="mb-4">
      <p className="text-sm text-gray-500 uppercase tracking-wide">Category</p>
      <p className="text-lg font-medium text-gray-700">{category}</p>
    </div>

   </div>
    {/* Price */}
    <div className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm ">
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        Price
      </p>
      <p className="text-3xl font-bold text-[#33a4b8]">
        $ {price}
      </p>
    </div>

  </div>
</div>

        </div>
    );
};

export default UpperCard;