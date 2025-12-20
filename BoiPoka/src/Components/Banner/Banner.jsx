import React from 'react';
import bookimg from '../../assets/pngwing.png'

const Banner = () => {
    return (
      <div className=" my-5 flex justify-around  p-13 items-center -2 bg-[#131313]/5 rounded-3xl">
        <div className="space-y-9 w-1/2 -2">
          <h1 className="text-6xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn border-0 btn-primary text-white bg-[#23BE0A] -0 p-7 text-lg">
            View The List
          </button>
        </div>
        <div className="-2">
          <img src={bookimg} alt="fff" />
        </div>
      </div>
    );
};

export default Banner;