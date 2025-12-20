import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold '>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"> <BsTwitter></BsTwitter> Twitter</button>
  <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;