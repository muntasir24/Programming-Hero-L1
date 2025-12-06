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
        element:<AddListing></AddListing>
      },
      {
       path:'mylistings',
       element:<MyListings></MyListings>
      },
      {
        path:'myorders',
        element:<MyOrders></MyOrders>
      },
      {
        path:'listingDetails/:id',
        element : <ListingDetails></ListingDetails>
      } ,
      {
        path:'myprofile',
        element:<Profile></Profile>
      }
  
    ]

  },
  {
    path :"/auth",
    element :<AuthLayout></AuthLayout>,
    errorElement :<Error404></Error404>,
    children :[
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  }
]);


export default router