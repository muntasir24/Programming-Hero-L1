import React from 'react';
import { FaCheck } from "react-icons/fa";
const CompleteTask = ({complete}) => {
    return (
        <div className='text-center p-3 space-y-2 rounded-xl mb-3 bg-[#B9F8CF]'>
                        <p>{complete.title}</p>
                        <div className='text-[#2a8b4c] flex items-center gap-2 justify-center'><FaCheck/> <p>Resolved</p> </div>
                    </div>
    );
};

export default CompleteTask;