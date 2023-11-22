import { Link, NavLink } from "react-router-dom";
import { RiLoginCircleFill } from "@react-icons/all-files/ri/RiLoginCircleFill";
import { BiCart } from '@react-icons/all-files/bi/BiCart'
import "./Header.css";
import useAdmin from "../../../Hooks/useAdmin";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  return (
    <div className="navbar print:hidden w-full lg:w-11/12 mx-auto border-dashed border-b-2 rounded-2xl border-black">
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
            className="w-96 flex flex-col gap-4 items-center menu menu-compact bg-white dropdown-content border-y-4 border-black p-4 m-3 font-playFair uppercase"
          >
            <div className="flex flex-col gap-3 items-center justify-center">
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/all-books">
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink className="w-60 mx-auto justify-center shadow shadow-black border-b-2 border-black hover:bg-black hover:text-white" to="/blogs">
                  Blogs
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
        <Link to="/" className="text-2xl font-playFair">
          <span className="bg-black p-1 text-white">Book</span> Town
        </Link>
      </div>

      <div className="navbar-center text-lg font-playFair uppercase hidden lg:flex">
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
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Blogs
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

      <div className="navbar-end font-playFair uppercase text-xl flex">
        {user?.email ? (
          <div className="flex items-center gap-8 lg:gap-12">
            {
              !isAdmin &&
              <Link to='/dashboard/my-cart' className="indicator">
                <span className="indicator-item badge badge-accent">{cart?.length || 0}</span>
                <button className="text-black text-4xl"><BiCart /></button>
              </Link>
            }
            <Link
              className="dropdown dropdown-end p-2 hover:bg-[#484848] text-sm bg-black rounded-xl text-white"
              to='/dashboard'>
              Dashboard
            </Link>
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
