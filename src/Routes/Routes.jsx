import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Error from "../Components/Shared/Error/Error";
import Login from "../Components/Register/Login/Login";
import Register from "../Components/Register/Register/Register";
import BooksCategory from "../Components/BooksCategory/BooksCategory";
import UsedBooks from "../Components/UsedBooks/UsedBooks";
import SellBooks from "../Components/SellBooks/SellBooks";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/books-category",
            loader: async() => await fetch('http://localhost:5000/books-category'),
            element: <BooksCategory></BooksCategory>
        },
        {
            path: "/used-books",
            element: <UsedBooks></UsedBooks>
        },
        {
            path: "/sell-books",
            element: <PrivateRoute><SellBooks></SellBooks></PrivateRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ],
    },
    {
        path: "*",
        element: <Error></Error>
    }
  ]);

export default router;