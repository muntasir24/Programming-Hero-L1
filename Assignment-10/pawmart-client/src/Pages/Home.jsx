import React from 'react';
import SwiperPaw from '../Components/SwiperPaw';
import Category from '../Components/Category';
import RecentListing from '../Components/RecentListing';


const Home = () => {
    return (
        <div className='space-y-20'>
          <SwiperPaw></SwiperPaw>
          <Category></Category>
          <RecentListing></RecentListing>
        </div>
    );
};

export default Home;