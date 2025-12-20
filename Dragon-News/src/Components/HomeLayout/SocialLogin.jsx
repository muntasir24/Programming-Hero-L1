import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <p className='font-bold mb-5 '>Login With</p>
            <div className='flex flex-col space-y-5 '>
                <button className='btn btn-outline  btn-secondary'><FcGoogle size={24} /> Login With Google</button>
                <button className='btn btn-outline btn-primary ' > <FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;