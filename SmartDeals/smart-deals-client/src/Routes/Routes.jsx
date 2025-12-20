import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Pages/Register";
import MyProducts from "../Pages/MyProducts";
import MyBids from "../Pages/MyBids";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Components/ProductDetails";
import Spinner from "../Components/Spinner";
import CreateAProduct from "../Components/CreateAProduct";

const router=createBrowserRouter([
{
    path:'/',
    Component:HomeLayout,
    hydrateFallbackElement:<Spinner></Spinner>,
    children :[
        {
            index:true,
            Component:Home
        },
        {
            path :'allProducts',
            Component:AllProducts
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'myProducts',
            element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
        },
        {
            path:'myBids',
            element :<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
           path:'/productDetails/:id',
           loader:({params})=>fetch(`https://smart-deals-api-server-m10.vercel.app/products/${params.id}`),
           element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
        },
        {
            path:"createAProduct",
            element:<PrivateRoute><CreateAProduct></CreateAProduct></PrivateRoute>
        }
    ]
}


])

export default router;