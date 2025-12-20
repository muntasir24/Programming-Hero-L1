import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import GlobalSpinner from '../../Spinner/GlobalSpinner';


const Home = () => {
    const {loadingUser,user,role}=useContext(AuthContext)
    console.log(role);
     if(loadingUser)return <GlobalSpinner></GlobalSpinner>
    return (
       <>
        <div>

            
        </div>

    </>
    );
};

export default Home;