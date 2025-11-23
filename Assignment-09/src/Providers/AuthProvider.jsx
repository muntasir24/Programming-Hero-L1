import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loadingUser,setLoading]=useState(true);
    const [user,setUser]=useState(null);


// Signup with email 
const signUpwithEmail=(email,password)=>{
    // setLoading(true);
 return createUserWithEmailAndPassword(auth,email,password)
}

// Signup with google 


// sign with email 
const signInwithEmail=(email,password)=>{
    // setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// signin with google 
const handleGoogleSignin=()=>{
    return signInWithPopup(auth,provider)
}

//Forgot password



//signout


//update user
const updateUser=(userData)=>{
    return updateProfile(auth.currentUser,userData);
}


//auth state chnage

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(curUser)=>{
    setUser(curUser);
    setLoading(false);
})

return ()=>unsubscribe();

},[])


    const AuthInfo={
       signUpwithEmail,
        signInwithEmail,
        setUser,
        user,
        updateUser,
        loadingUser,
        handleGoogleSignin,
        setLoading
    }

    return (<AuthContext value={AuthInfo}>{children}</AuthContext>  );
};

export default AuthProvider;