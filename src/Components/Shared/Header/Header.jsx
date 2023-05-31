import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [error, setError] = useState('');

  const [booksCategory, setBooksCategory] = useState([]);

  const categoryData = async () => {
    try {
      const loadData = await fetch('https://booktown-server-production.up.railway.app/books-category')
        .then(res => res.json())
        .then(data => setBooksCategory(data))
    }
    catch {
      error => setError(error.message);
    }
  };

  useEffect(() => {
    categoryData();
  }, [])

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar w-full lg:w-11/12 mx-auto">
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
            className="w-56 menu menu-compact bg-white dropdown-content border-y-4 border-black p-4 m-3 font-wallPoet uppercase"
          >
            <li tabIndex={0}>
              <div className="hover:bg-black hover:text-white">
                Books Category
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </div>
              <ul className="p-2 bg-white">
                <li>
                  {
                    booksCategory.map(category => <NavLink
                      className="hover:bg-black hover:text-white"
                      to={`/books-category/${category._id}`}
                    >
                      {category.name}
                    </NavLink>)
                  }
                </li>
              </ul>
            </li>
            <li>
              <NavLink className="hover:bg-black hover:text-white" to="/used-books">
                Used Books
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-black hover:text-white" to="/sell-books">
                Sell Books
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-wallPoet">
          <span className="bg-black p-1 text-white">Book</span> Town
        </Link>
      </div>

      <div className="navbar-center text-lg font-wallPoet uppercase hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal flex gap-5">
          <li tabIndex={0}>
            <div className="hover:bg-black hover:text-white">
              Books Category
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <ul className="p-2 bg-white border-x-4 border-black">
              <li>
                {
                  booksCategory.map(category => <NavLink
                    key={category._id}
                    to={`/books-category/${category._id}`}
                    className={({ isActive }) => (isActive ?
                      "active-link"
                      :
                      "hover:bg-black hover:text-white")}
                  >{category.name}
                  </NavLink>)
                }
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/used-books"
              className={({ isActive }) => (isActive ? "active-link" : "hover:bg-black hover:text-white")}
            >
              Used Books
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
                <button className="hover:bg-black hover:text-white" onClick={handleLogOut}>Log Out</button>
              </li>
            </ul>
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
