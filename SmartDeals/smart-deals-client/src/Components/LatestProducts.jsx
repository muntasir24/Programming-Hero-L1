import React, { use } from 'react';
import Product from './Product';

const LatestProducts = ({latestProductsPromise}) => {
    const products=use(latestProductsPromise);
    // console.log(products);
    return (
        <div>
            <h2 className='text-5xl text-center'>Recent <span className='text-primary'>Products</span></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-2 '>
                {
                products.map(product=><Product product={product}  key={product._id}></Product>)
            }
            </div>
        </div>
    );
};

export default LatestProducts;