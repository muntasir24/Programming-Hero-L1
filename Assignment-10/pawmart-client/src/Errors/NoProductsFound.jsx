import React from 'react';
import notfnd from '../assets/no-product-found.webp'
const NoProductsFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-90' src={notfnd} alt="" />
            <p className='text-center text-2xl text-gray-400'>No Products Found</p>
        </div>
    );
};

export default NoProductsFound;