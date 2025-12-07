import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Globalspinner from '../Spinner/Globalspinner';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);

    if(loading) return <Globalspinner></Globalspinner>;

    if(user)return children;
    return <Navigate to={'/'}></Navigate>
    

};

export default PrivateRoute;