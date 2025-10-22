import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "apps", Component: Apps },
            { path: "app/:title", Component: AppDetails },
            { path: "installation", Component: Installation},
        ]
    }
]);


export default router;