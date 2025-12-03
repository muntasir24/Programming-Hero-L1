import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";


const instance = axios.create({
  baseURL: "https://smart-deals-api-server-m10.vercel.app",
});

const useAxiosSecure = () => {
    const navigate=useNavigate();
  const { user ,SignOutUSer} = useAuth();
  // set token in the header for all the api call
  useEffect(() => {
   const requestInterceptor= instance.interceptors.request.use((config) => {
      console.log(config);
      config.headers.authorization = `Bearer ${user?.accessToken}`;
      return config;
    })

//response interceptor
const responseInterceptor= instance.interceptors.response.use(res=>{
    return res;
},err=>{
    console.log("err in interceptor",err);
    const status=err.status;
    if(status===401 || status===403){
        SignOutUSer()
        .then(()=>{
            navigate('/register')
        })
    }

})

    return ()=>{
        instance.interceptors.request.eject(requestInterceptor);
        instance.interceptors.response.eject(responseInterceptor);
    }
  }, [user,navigate,SignOutUSer]);
  return instance;
};

export default useAxiosSecure;
