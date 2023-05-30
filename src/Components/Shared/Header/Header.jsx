import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar">
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
            className="dropdown-content border-l-4 border-black p-4 my-3 mx-3 font-wallPoet uppercase flex flex-col gap-3"
          >
            <div>
              <li className="w-52">
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link-mb" : "border-l-2 border-black hover:bg-black hover:text-white px-2 py-1")}
                  to="/books-category"
                >
                  Books Category
                </NavLink>
              </li>
              <li className="w-52">
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link-mb" : "border-l-2 border-black hover:bg-black hover:text-white px-2 py-1")}
                  to="/used-books"
                >
                  Used Books
                </NavLink>
              </li>
              <li className="w-52">
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link-mb" : "border-l-2 border-black hover:bg-black hover:text-white px-2 py-1")}
                  to="/sell-books"
                >
                  Sell Books
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-wallPoet">
          <span className="bg-black p-1 text-white">Book</span> Town
        </Link>
      </div>

      <div className="navbar-center text-xl font-wallPoet uppercase hidden lg:flex">
        <ul className="flex justify-between gap-5">
          <li>
            <NavLink
              to="/books-category"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white px-2 py-1")}
            >
              Books Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/used-books"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white px-2 py-1")}
            >
              Used Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell-books"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white px-2 py-1")}
            >
              Sell Books
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end font-wallPoet uppercase text-xl flex">
        {user?.email ? (
          <div className="flex items-center gap-2 uppercase">
            <Link to='/dashboard' className="flex items-center">
              <img className="h-6 lg:h-10 lg:w-10" src={user?.photoURL} alt="" />
              <h3 className="bg-black text-xs lg:text-sm hover:bg-white hover:text-black hover:border-y-2 hover:border-black h-6 lg:h-10 flex items-center text-white px-2 py-1">
                {user?.displayName}
              </h3>
            </Link>
            <Link>
              <button
                className="uppercase shadow text-xs lg:text-lg py-1 px-2 border-x-2 hover:border-y-2 hover:border-black border-black"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4 uppercase">
            <Link
              to="/login"
              className="border-x-2 border-black hover:bg-black hover:text-white px-2 py-1"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
