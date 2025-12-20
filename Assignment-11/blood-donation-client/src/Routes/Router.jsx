import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import DonationReq from "../Pages/DonationReq";
import MainDashboardLayout from "../Layouts/MainDashboardLayout";
import MainDashBoard from "../Pages/Dashboard/MainDashBoard";
import AddRequest from "../Pages/Dashboard/AddRequest";
import AllUsers from "../Pages/Dashboard/AllUsers";
import PrivateRouter from "./PrivateRouter";
import MyRequest from "../Pages/Dashboard/MyRequest";
import Funding from "../Pages/Funding";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"donation-requests",
        element:<DonationReq></DonationReq>
      },
      {
        path:"funding",
        element:<Funding></Funding>
      }
     
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRouter><MainDashboardLayout></MainDashboardLayout></PrivateRouter>,
    children:[
      {
        path:"main",
        element:<MainDashBoard></MainDashBoard>

      },
      {
        path:"all-requests",
        Component:AddRequest
      },
      {
        path:"all-users",
        Component:AllUsers
      }
      ,{
        path:"my-request",
        Component:MyRequest
      }
    ]

  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
       {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);

export default router;
