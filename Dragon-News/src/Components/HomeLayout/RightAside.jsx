import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-4'>
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
          <Qzone></Qzone>
        </div>
    );
};

export default RightAside;