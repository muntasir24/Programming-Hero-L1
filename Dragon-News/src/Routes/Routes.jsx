import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRouter from "../provider/PrivateRouter";
import Loading from "../Components/Loading";


const router=createBrowserRouter([
{
    path :'/',
    element :<HomeLayout></HomeLayout>,
    children :[
        {index: true, Component:Home},
        {path:'/category/:id', 
        Component:CategoryNews,
        loader :()=>fetch('/news.json'),
        hydrateFallbackElement :<Loading></Loading>     
    }
    ]
},
{
    path :'/auth',
    element :<AuthLayout></AuthLayout>,
    children :[
        {
            path:'/auth/login',
            Component :Login
        },
        {
            path:'/auth/register',
            Component :Register
        }
    ]
},
{
    path :"/news-details/:id",
    element :<PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
    loader :()=>fetch('/news.json'),
      hydrateFallbackElement :<Loading></Loading> 
},
{
    path :"/*",
    element :<h2>error 404</h2>
}


])

export default router;