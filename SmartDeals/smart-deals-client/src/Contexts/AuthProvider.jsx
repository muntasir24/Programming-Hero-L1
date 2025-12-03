import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInUser=(email,pass)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,pass);
  }

  const signInwithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
  }

 

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(curUser)=>{
        setUser(curUser);
        if(curUser){
          const loggedUser={email:curUser.email}
          console.log(curUser.email);
          fetch(`https://smart-deals-api-server-m10.vercel.app/getToken`,{
            method:"POST",
            headers :{
              'content-type':'application/json'
            },
            body:JSON.stringify(loggedUser)

          })
          .then(res=>res.json())
          .then(data=>{
            console.log('after token',data);
            localStorage.setItem('token',data.token)
          })
        }
        else{
          localStorage.removeItem('token');
        }
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
  },[])

  const SignOutUSer=()=>{
    setLoading(true)
    return signOut(auth);
  }

  const authInfo = {
    createUser,
    user,
    setUser,
    loading,
    setLoading,
    signInUser,
    signInwithGoogle,
    SignOutUSer
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
