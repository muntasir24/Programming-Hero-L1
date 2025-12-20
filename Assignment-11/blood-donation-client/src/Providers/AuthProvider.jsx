import React, { useEffect, useState, useCallback, useMemo } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxios from "../Hooks/useAxios";

const AuthProvider = ({ children }) => {
  const [loadingUser, setLoading] = useState(true);
  const [roleloading, setRoleLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [userStatus,setUserStatus]=useState('');
  const axiosPublic = useAxios();

  // 1. Stabilize fetchRole with useCallback
  const fetchRole = useCallback(async (email) => {
    if (!email) {
      setRole(null);
      setRoleLoading(false);
      return;
    }
    setRoleLoading(true);
    try {
      const res = await axiosPublic.get(`/users/role/${email}`);
      setRole(res.data?.role || null);
      setUserStatus(res.data?.status);
      console.log(res.data?.status);
    } catch (err) {
      console.error("Error fetching role:", err);
      setRole(null);
    } finally {
      setRoleLoading(false);
    }
  }, [axiosPublic]);

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userdata) => {
    return updateProfile(auth.currentUser, userdata);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    setRole(null); // Clear role on logout
    return signOut(auth);
  };

  // 2. Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (curUser) => {
      setUser(curUser);
      
      if (curUser) {
        // Fetch role when user is detected
        await fetchRole(curUser.email);
      } else {
        setRole(null);
        setRoleLoading(false);
      }
      
      setLoading(false);
    });
    return () => unsubscribe();
  }, [fetchRole]);

  // 3. Memoize the Context Value
  // This ensures that components only re-render when the actual values change
  const AuthInfo = useMemo(() => ({
    signUpWithEmail,
    updateUser,
    signInUser,
    user,
    loadingUser,
    role,
    logOut,
    roleloading,
    userStatus,
    fetchRole // Exported so you can call it manually in Register
  }), [user, loadingUser, role, roleloading, userStatus, fetchRole]);

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;