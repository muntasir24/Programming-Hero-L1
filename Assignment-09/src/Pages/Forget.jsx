import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import auth from '../Firebase/firebase.config';

const Forget = () => {
    const {email}=useParams();

    const handleforget=(e)=>{
        e.preventDefault();
        const email=e.target.mail.value;
        sendPasswordResetEmail(auth,email)
        .then(()=>{
          window.open('https://mail.google.com/')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className='min-h-screen flex border justify-center items-center'> 
            <form onSubmit={handleforget} className="fieldset">
          
          <input name='mail' defaultValue={email} type="email" className="input" placeholder="Email" />
         
          <button className="btn btn-neutral mt-4">Send Link</button>
        </form>
        </div>
    );
};

export default Forget;