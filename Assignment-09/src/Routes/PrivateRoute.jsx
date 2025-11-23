import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const PrivateRoute = ({children}) => {
    const { user,loadingUser}=useContext(AuthContext)
     
    const location=useLocation();
    // console.log(location);

     if(loadingUser) return <GlobalSpinner></GlobalSpinner>
   
    
    if(user){
        return children;
    }
    return <Navigate state={{
        title:location?.pathname,
        id:location?.state?.id
    }} to={'/auth/login' }></Navigate>
};

export default PrivateRoute;


 
  