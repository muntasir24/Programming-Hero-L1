import React, { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 const [category,setCategory]=useState(null);

  const SignUpUser = (email, pass) => {
 setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const SignInUser = (email, pass) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const SignInUserGoogle = () => {
     setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const SignOutUser = () => {
     setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  const updateUser=(userData)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,userData);
  }

  const authinfo = {
    SignUpUser,
    SignInUser,
    SignInUserGoogle,
    SignOutUser,
    loading,
    user,
    setUser,
    updateUser,
     setLoading,
    category,
    setCategory
  };

  return <AuthContext value={authinfo}>{children}</AuthContext>;
};

export default AuthProvider;
