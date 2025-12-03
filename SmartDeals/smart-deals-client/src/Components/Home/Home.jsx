import React, { Suspense } from 'react';
import LatestProducts from '../LatestProducts';
import Spinner from '../Spinner';

const latestProductsPromise = fetch('https://smart-deals-api-server-m10.vercel.app/latest-products')
    .then(res => res.json());

const Home = () => {
    return (
        <div>
            <Suspense fallback={<Spinner />}>
                <LatestProducts latestProductsPromise={latestProductsPromise} />
            </Suspense>
        </div>
    );
};

export default Home;

