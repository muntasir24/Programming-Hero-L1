import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router"; // To redirect on error

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Request Interceptor: Attach Token
    const requestInterceptor = instance.interceptors.request.use((config) => {
      // Use optional chaining to prevent crash if user is null
      const token = user?.accessToken; 
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    // 2. Response Interceptor: Handle Unauthorized/Forbidden
    const responseInterceptor = instance.interceptors.response.use((response) => {
      return response;
    }, async (error) => {
      const status = error.response?.status;
      
      // If token is expired or user is unauthorized, log them out
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/auth/login');
      }
      return Promise.reject(error);
    });

    // Cleanup Ejectors
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return instance;
};

export default useAxiosSecure;