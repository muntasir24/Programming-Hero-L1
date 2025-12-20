import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2 my-2'>
            <p className='bg-secondary text-white p-3 '>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}> 
                <p className='font-semibold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
             <p className='font-semibold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
             <p className='font-semibold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;