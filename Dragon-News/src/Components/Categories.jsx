import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json').then(res=>res.json());
const Categories = () => {
const categories=use(categoryPromise);
// console.log(categories);
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
           <div className='grid grid-cols-1 mt-5 gap-3'>
             {
                categories.map(cat=> <NavLink to={`/category/${cat.id}`} className={({isActive})=>isActive ? "bg-base-200 btn border-0 text-primary":" text-accent btn border-0 bg-base-100 hover:bg-base-200"}  key={cat.id}>{cat.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;