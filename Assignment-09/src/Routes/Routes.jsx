import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PageNotFound from "../Errors/PageNotFound";
import Profile from "../Pages/Profile";
import SkillDetails from "../Components/details/SkillDetails";
import PrivateRoute from "./PrivateRoute";
import Forget from "../Pages/Forget";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/details/:title',
        element:<PrivateRoute><SkillDetails></SkillDetails></PrivateRoute>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement:<PageNotFound></PageNotFound>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:"forget/:email",
        element: <Forget></Forget>
      }
    ],
  },
   {
        path:'/profile',
        element:<PrivateRoute> <Profile></Profile> </PrivateRoute>,

    errorElement:<PageNotFound></PageNotFound>,
      },
]);

export default router;
