import React from "react";
import Marquee from "react-fast-marquee";
import i1 from "../assets/jhankar.jpg";
import i2 from "../assets/rakib.jpeg";
import i3 from "../assets/zihad.jpg";

const TopProviders= () => {
  return (
  < div className="py-4 bg-[#e6f9fc] ">
  <div>
    <h1 className="text-center py-10  text-4xl font-bold text-gray-700">TOP PROVIDERS</h1>
  </div>
    <Marquee
      speed={70}              // change speed (pixels / second)
      direction="left"        // can be "left" or "right"
      pauseOnHover={false}    // whether to pause on hover
      loop={0}                // 0 = infinite loop
      autoFill={true}         // fill space with children so no gap
    >
      <div className="flex gap-10 ">
        <div className=" ">
          <img className=' md:h-80 md:w-80 h-50  w-50 rounded-2xl object-cover ml-4' src={i1} alt="jhankar" />
          <p className='mt-2 text-lg text-gray-500 font-bold text-left'>Name: Jhankar Mahbub</p>
        </div>
        <div className=" ">
          <img className='md:h-80 md:w-80 h-50  w-50  rounded-2xl object-cover' src={i2} alt="rakib" />
          <p className='mt-2 text-lg text-gray-500 font-bold text-left'>Name: ABDUR RAKIB</p>
        </div>
        <div className=" ">
          <img className='md:h-80 md:w-80 h-50  w-50  rounded-2xl object-cover ' src={i3} alt="zihad" />
          <p className='mt-2 text-lg text-gray-500 font-bold text-left'>Name: Ferdous Zihad</p>
        </div>

        {/* repeat if needed or autoFill will duplicate children */}
      </div>
    </Marquee>
  </div>
  );
};

export default TopProviders;
