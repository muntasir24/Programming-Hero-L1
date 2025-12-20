import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Error404 from "../Errors/Error404";
import Home from "../Pages/Home";
import Pet_Supplies from "../Pages/Pet_Supplies";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import ListingDetails from "../Pages/ListingDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement :<Error404></Error404>,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:'petsSupplies',
        element:<Pet_Supplies></Pet_Supplies>
      },
      {
        path :'addlistings',
        element:<PrivateRoute><AddListing></AddListing></PrivateRoute>
      },
      {
       path:'mylistings',
       element:<PrivateRoute><MyListings></MyListings></PrivateRoute>
      },
      {
        path:'myorders',
        element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path:'listingDetails/:id',
        element : <ListingDetails></ListingDetails>
      } ,
      
  
    ]

  }
]);


export default router