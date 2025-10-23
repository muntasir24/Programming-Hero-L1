import React from 'react';
import { RingLoader } from "react-spinners";
const GlobalSpinner = () => {
    return (
      <div className=" ">
        <h1 className="flex opacity-65 min-h-screen justify-center items-center  text-7xl">
          <p>L</p>
          <span className="  mx-2 ">
            <RingLoader color="#0696f3" size={68} />
          </span>
          <p>ading</p>
        </h1>
      </div>
    );
};

export default GlobalSpinner;