import React from 'react';

const DetailsSkeleton = () => {
  return (
    <div className='flex justify-center items-center mt-7'>
      <div className="flex w-full gap-4">
  <div className="skeleton h-90  w-full"></div>
 <div className='flex flex-col gap-6 w-1/2 '>
   <div className="skeleton h-10 w-38"></div>
  <div className="skeleton h-10 w-full"></div>
  <div className="skeleton h-10 w-full"></div>
 </div>
</div>
    </div>
  );
};

export default DetailsSkeleton;