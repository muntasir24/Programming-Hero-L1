import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex justify-center py-10">
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin"></div>
    </div> 
        </div>
    );
};

export default Spinner;