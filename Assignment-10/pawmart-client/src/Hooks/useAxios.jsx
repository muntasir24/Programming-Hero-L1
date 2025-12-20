import axios from "axios"

const axiosInstance=axios.create({
    baseURL :'https://pawmart-server-a10.vercel.app'
})

const useAxios=()=>{
    return axiosInstance;
}

export default useAxios
