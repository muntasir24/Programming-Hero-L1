import React from 'react';
import { PuffLoader } from "react-spinners";


const GlobalSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <PuffLoader
  color="#54cad5"
  size={130}
/>

        </div>
    );
};

export default GlobalSpinner;