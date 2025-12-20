import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import GlobalSpinner from '../Spinner/GlobalSpinner';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user,loadingUser,roleloading,userStatus}=useContext(AuthContext);
    if(loadingUser || roleloading)return <GlobalSpinner></GlobalSpinner>
    //    console.log(!(userStatus==='active'));
    if(!user || !(userStatus==='active'))return <Navigate to={'/auth/login'}></Navigate>

  return children;
};

export default PrivateRouter;