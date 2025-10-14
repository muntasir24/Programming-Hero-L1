import { createBrowserRouter } from "react-router";
import { PacmanLoader } from "react-spinners";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Components/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadList from "../Components/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      { path: "about", Component: About },
      {
        path: "bookInfo/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "readlist",
        Component: ReadList,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className=" mx-auto flex border h-screen items-center justify-center">
        <p className="text-4xl font-bold text-center mr-10">Not Found</p>
        <PacmanLoader color="#3b8dd0" loading margin={0} size={47} />
      </div>
    ),
  },
]);
