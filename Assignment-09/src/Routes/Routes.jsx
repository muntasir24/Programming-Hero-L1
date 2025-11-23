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
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
   {
        path:'/profile',
        element:<PrivateRoute> <Profile></Profile> </PrivateRoute>
      },
]);

export default router;
