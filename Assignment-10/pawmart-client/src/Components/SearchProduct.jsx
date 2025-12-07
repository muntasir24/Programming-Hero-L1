import React from 'react';
import petshop from "../assets/petshop.jpg"
const SearchProduct = () => {
    return (
        <div className='py-4 w-full  bg-base-200  flex justify-center rounded-2xl'>
         <img src={petshop} alt="" />
        </div>
    );
};

export default SearchProduct;