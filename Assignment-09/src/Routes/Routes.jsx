import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PageNotFound from "../Errors/PageNotFound";
import Profile from "../Pages/Profile";
import SkillDetails from "../Components/details/SkillDetails";


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
        path:'/profile',
        Component :Profile
      },
      {
        path:'/details/:title',
        Component:SkillDetails
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
