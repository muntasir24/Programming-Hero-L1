import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products/Products"
import Home from "../Pages/Home/Home";
import Wishlist from "../Pages/Wishlist/Wishlist";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Spinner from "../Components/Spinner/Spinner";
import ProductDetails from "../Pages/ProductDetails/ProductDetails"


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement :<Spinner></Spinner>,
    children:[ 
      {
        index: true,
        Component: Home,
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: '/product/:id',
       Component:ProductDetails
      },
      {
        path: '/product/*',
        element:<p>NOOOOOOOOOOOO</p>
      }
    ],
  },
]);

export default router;