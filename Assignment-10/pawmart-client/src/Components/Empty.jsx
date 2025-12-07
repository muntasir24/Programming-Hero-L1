import React, { useContext } from 'react';
import cart from "../assets/empty-cart.webp"
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';



const Empty = () => {
    

    return (
        <div className='flex items-center justify-center flex-col gap-5'>
            <img src={cart} alt="" />
            <p className='font-bold text-2xl text-gray-500 '> Your List is Empty!</p>
            <p className='font-bold text-gray-500 '> Looks Like you haven't added your list! Add pets /products</p>
            <Link className='btn btn-primary text-center pb-3' to={'/addlistings'}>Add List</Link>
        </div>
    );
};

export default Empty;