import React from 'react';
import classimg from "../../assets/class.png"
import swimming from "../../assets/swimming.png"
import playimg from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold'> QZone</h2>
            <div className=' flex flex-col p-3'>
                <img src={classimg} alt="" />
                <img src={swimming} alt="" />
                <img src={playimg} alt="" />

            </div>
        </div>
    );
};

export default Qzone;