import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const instance = axios.create({
  baseURL: "https://pawmart-server-a10.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  //set token in the header for all the api call using axiosseure hook
  useEffect(()=>{
    const requestInterceptor= instance.interceptors.request.use((config) => {
    // console.log(config);
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
    return ()=>{
    instance.interceptors.request.eject(requestInterceptor);
  }
  },[user]);



  return instance;
};

export default useAxiosSecure;
