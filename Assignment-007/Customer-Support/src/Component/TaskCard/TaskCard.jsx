import React from 'react';

const TaskCard = ({card,handleComplete}) => {
 
    
    return (
        <div className='bg-gray-100 p-3 space-y-3 text-center rounded-xl mb-3'>
                        <p className='font-semibold'>{card.title}</p>
                        <button onClick={()=>handleComplete(card)} className='btn btn-success btn-wide text-white'>Complete</button>
                    </div>
    );
};

export default TaskCard;