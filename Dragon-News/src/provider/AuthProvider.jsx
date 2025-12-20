import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [loading ,setLoading]=useState(true);
  const [user,setUser]=useState(null);
  // console.log(user);
  const LogOut=()=>{
return signOut(auth);
  }
// console.log(loading,user);
  const createUser=(email,pass)=>{
    return createUserWithEmailAndPassword(auth,email,pass);
  }
  const LogIn=(email,pass)=>{
 return signInWithEmailAndPassword(auth,email,pass);
  }

  const updateUser=(userData)=>{
    return updateProfile(auth.currentUser,userData);
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(curUser)=>{
setUser(curUser);
setLoading(false);
// console.log("User changed:", curUser);
    }); 
    return ()=>unsubscribe();
  },[])

  const AuthInfo={
    user,
    setUser,
    createUser,
    LogOut,
    LogIn,
    loading,
    updateUser
  }

    return ( <AuthContext value={AuthInfo}> {children}</AuthContext> );
};

export default AuthProvider;