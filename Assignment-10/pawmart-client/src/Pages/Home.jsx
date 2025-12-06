import React from 'react';
import SwiperPaw from '../Components/SwiperPaw';
import Category from '../Components/Category';
import RecentListing from '../Components/RecentListing';
import StrepperWhy from '../Components/StrepperWhy';
import PetHeroes from '../Components/PetHeroes';


const Home = () => {
    return (
        <div className='space-y-20'>
          <SwiperPaw></SwiperPaw>
          <Category></Category>
          <RecentListing></RecentListing>
          <div className='divider text-2xl font-bold text-secondary opacity-76'>Why Adopt from PawMart?</div>
          <StrepperWhy></StrepperWhy>
          <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;