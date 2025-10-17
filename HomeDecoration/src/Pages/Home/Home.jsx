import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;