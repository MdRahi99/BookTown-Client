import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Error from "../Components/Shared/Error/Error";
import Login from "../Components/Register/Login/Login";
import Register from "../Components/Register/Register/Register";
import AllBooks from "../Components/AllBooks/AllBooks";
import SellBooks from "../Components/SellBooks/SellBooks";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import ProfileLayout from "../Layout/ProfileLayout/ProfileLayout";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Blogs from "../Components/Blogs/Blogs";
import BookDetails from "../Components/AllBooks/Books/BookDetails";
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
            path: "/all-books",
            element: <AllBooks></AllBooks>
        },
        {
            path: "/book-details/:id",
            loader: async({params}) => await fetch(`https://book-town-server.vercel.app/book-details/${params.id}`),
            element: <BookDetails></BookDetails>
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
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ],
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