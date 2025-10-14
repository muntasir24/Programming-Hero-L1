import React from 'react';
import v1 from './vector1.png';

const Banner = ({cardContainer,CompleteCards}) => {
    return (
        
        <div className='flex  flex-col md:flex-row  w-11/12 mx-auto gap-7 mt-10 mb-10 '>
            <div className={` relative  md:p-23 p-7 md:w-[50%] rounded-2xl text-white text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2]`}>
              <div className='absolute top-0 left-0'>
                <img src={v1} alt="" className='w-[50%] md:w-full'/></div>
              <p className='text-xl'>In-Progress</p>
              <p className='text-4xl'>{cardContainer.length}</p>
            
              <div className='absolute top-0 right-0 transform scale-x-[-1]'>
                  <img src={v1} alt="" className='w-[50%] md:w-full' />
              </div>
            </div>
            <div className='md:w-[50%] md:p-22 p-7 relative rounded-2xl text-white  text-center bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
            <div className='absolute top-0 left-0'>
                <img src={v1} alt="" className='w-[50%] md:w-full'/></div>
            <div className='absolute top-0 right-0 transform scale-x-[-1]'>
                  <img src={v1} alt="" className='w-[50%] md:w-full' />
              </div>
             <p className='text-xl'>Resolved</p>
             <p className='text-4xl'>{CompleteCards.length}</p>
            </div>
            
        </div>
    );
};

export default Banner;