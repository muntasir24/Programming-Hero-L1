import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Register from '../Pages/Register';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    if(loading) return <Spinner></Spinner>
    
    if(!user) return <Register></Register>
    return children;
};

export default PrivateRoute;