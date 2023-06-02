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
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import ProfileLayout from "../Layout/ProfileLayout/ProfileLayout";
import AllCategories from "../Components/Shared/AllCategories/AllCategories";
import RegisterLayout from "../Layout/RegisterLayout/RegisterLayout";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Blogs from "../Components/Blogs/Blogs";

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
            path: "/books-category/:id",
            loader: async({params}) => await fetch(`https://booktown-server-production.up.railway.app/books-category/${params.id}`),
            element: <BooksCategory></BooksCategory>
        },
        {
            path: "/all-categories",
            element: <AllCategories></AllCategories>
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
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
      ],
    },
    {
        path: '/',
        element: <RegisterLayout></RegisterLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <ProfileLayout></ProfileLayout>,
        children: [
            {
                path: '/dashboard',
                element: <UserDashboard></UserDashboard>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
  ]);

export default router;