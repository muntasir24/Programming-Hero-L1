import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../../Components/productcard/ProductCard';
import useProducts from '../../Hooks/useProducts';

const Home = () => {
    const data = useLoaderData();
    const hookData = useProducts();
    console.log(hookData);
    const fetureData = data.slice(0, 6);
    console.log(fetureData);
    // console.log(data);

    return (
        <div>
            <div className='flex justify-between items-center py-5'>
                <h1 className='text-2xl font-semibold'>Fetured Product</h1>
                <Link to={"/products"} className='btn outline'>See All Products</Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    fetureData.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;