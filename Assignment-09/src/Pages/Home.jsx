import React from 'react';
import Slider from '../Components/Slider';
import Skills from '../Components/Skills';
import TopProviders from '../Components/TopProviders';
import HowItWorks from '../Components/HowItWorks';
import WhatPeopleSay from '../Components/WhatPeopleSay';
import { AuthContext } from '../Contexts/AuthContext';

// import useSkillData from '../Hooks/useSkillData';

const Home = () => {
//    const{user}=useContext(AuthContext);
//    console.log(user);
    // console.log(skillData);
    return (
        <div className='space-y-5  '>
     <Slider></Slider>
     <Skills></Skills>
     <TopProviders></TopProviders>
     <div className='flex justify-center    '><HowItWorks></HowItWorks></div>
     <WhatPeopleSay></WhatPeopleSay>
    


        </div>
    );
};

export default Home;