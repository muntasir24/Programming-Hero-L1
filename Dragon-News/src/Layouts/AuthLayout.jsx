import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const AuthLayout = () => {
  const navigation=useNavigation();
    return (
        <div className='bg-base-200 min-h-screen'>
           <header className='w-11/12 mx-auto py-4'>
             <Navbar></Navbar>
             

           </header>
           <main className='w-11/12 mx-auto py-5'>
                {navigation.state=='loading' ? <Loading></Loading> :<Outlet></Outlet>}
             </main>

        </div>
    );
};

export default AuthLayout;