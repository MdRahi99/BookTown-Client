import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { RiLoginCircleFill } from "@react-icons/all-files/ri/RiLoginCircleFill";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import "./Header.css";
import AllCategories from "../AllCategories/AllCategories";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar w-full lg:w-11/12 mx-auto border-dashed border-b-2 rounded-2xl border-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="w-96 flex flex-col gap-4 items-center menu menu-compact bg-white dropdown-content border-y-4 border-black p-4 m-3 font-wallPoet uppercase"
          >
            <div>
              <div className="flex items-center gap-2 w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/used-books">
                <AiFillCaretDown className="text-xl"></AiFillCaretDown>
                <h3>All Categories</h3>
                <AiFillCaretDown className="text-xl"></AiFillCaretDown>
              </div>
              <li tabIndex={0} className="mt-3 border-x-4 border-dotted border-black">
                <AllCategories></AllCategories>
              </li>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/all-books">
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/sell-books">
                  Sell Books
                </NavLink>
              </li>
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-wallPoet">
          <span className="bg-black p-1 text-white">Book</span> Town
        </Link>
      </div>

      <div className="navbar-center text-lg font-wallPoet uppercase hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal flex gap-5">
          <li>
            <NavLink
              to="/all-books"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell-books"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Sell Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end font-wallPoet uppercase text-xl flex">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
              <div className="w-14 rounded">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to='/dashboard'>
                  <span className="w-full bg-black hover:bg-white hover:text-black px-2 py-1 text-white">{user?.displayName}</span>
                </Link>
              </li>
              <li>
                <div className="flex gap-2 items-center justify-center border-dotted shadow shadow-black border-x-2 mt-4 text-md border-black hover:bg-black hover:text-white">
                  <button onClick={handleLogOut}>Log Out</button>
                  <RiLoginCircleFill className="text-lg"></RiLoginCircleFill>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-4 uppercase">
            <Link
              to="/login"
              className="flex gap-2 items-center border-y-2 rounded-xl shadow shadow-black border-black hover:bg-black hover:text-white px-2 py-1"
            >
              <h3>Log In</h3>
              <RiLoginCircleFill></RiLoginCircleFill>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
