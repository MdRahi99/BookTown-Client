import { createBrowserRouter } from "react-router-dom";

// --------------- Contents Starts --------------- //
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Error from "../Components/Shared/Error/Error";
import Login from "../Components/Register/Login/Login";
import Register from "../Components/Register/Register/Register";
import AllBooks from "../Components/AllBooks/AllBooks";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Blogs from "../Components/Blogs/Blogs";
import BookDetails from "../Components/AllBooks/Books/BookDetails";
// --------------- Contents Ends --------------- //

// --------------- Private Route Starts --------------- //
import PrivateRoute from "./PrivateRoute";
// --------------- Private Route Ends --------------- //

// --------------- Profile Layout Starts --------------- //
import ProfileLayout from "../Layout/ProfileLayout/ProfileLayout";
// --------------- Profile Layout Ends --------------- //

// --------------- Dashboard Starts --------------- //
import Dashboard from "../Components/Dashboard/Dashboard";
// --------------- Dashboard Ends --------------- //

// --------------- User Dashboard Starts --------------- //
import SellBooks from "../Components/Dashboard/UserDashboard/SellBooks/SellBooks";
import MyBooks from "../Components/Dashboard/UserDashboard/MyBooks/MyBooks";
import MyBookDetails from "../Components/Dashboard/UserDashboard/MyBooks/MyBookDetails";
import MyCart from "../Components/Dashboard/UserDashboard/MyCart/MyCart";
import CartInfo from "../Components/Dashboard/UserDashboard/MyCart/CartInfo";
// --------------- User Dashboard Ends --------------- //

// --------------- Admin Dashboard Starts --------------- //
import AllUsers from "../Components/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
// --------------- Admin Dashboard Ends --------------- //

const router = createBrowserRouter([
    // ----------- Contents Routes -----------
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
                element: <PrivateRoute><BookDetails /></PrivateRoute>
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
    // ----------- Dashboard Routes -----------
    {
        path: '/dashboard',
        element: <ProfileLayout></ProfileLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/my-books',
                element: <PrivateRoute><MyBooks></MyBooks></PrivateRoute>
            },
            {
                path: '/dashboard/my-book-details/:id',
                element: <PrivateRoute><MyBookDetails></MyBookDetails></PrivateRoute>
            },
            {
                path: "/dashboard/my-cart",
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: "/dashboard/product-info/:id",
                element: <PrivateRoute><CartInfo /></PrivateRoute>
            },
            {
                path: "/dashboard/sell-books",
                element: <PrivateRoute><SellBooks></SellBooks></PrivateRoute>
            },
            // ----------- Admin Dashboard -------------- //
            {
                path: "/dashboard/all-users",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

export default router;