import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
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
                <Link
                  className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1"
                  to="/books-category"
                >
                  Books Category
                </Link>
              </li>
              <li className="w-52">
                <Link
                  className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1"
                  to="/used-books"
                >
                  Used Books
                </Link>
              </li>
              <li className="w-52">
                <Link
                  className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1"
                  to="/sell-books"
                >
                  Sell Books
                </Link>
              </li>
            </div>

            <div>
              {user?.email ? (
                <div className="flex items-center gap-2 uppercase">
                  <h3 className="bg-black text-white px-2 py-1">
                    {user?.displayName}
                  </h3>
                  <Link>
                    <button
                      className="uppercase shadow py-1 px-2 border-x-2 hover:bg-black hover:text-white border-black"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-1 uppercase">
                  <Link
                    to="/login"
                    className="hover:bg-black hover:text-white border-x-2 border-black px-2 py-1"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    className="hover:bg-black hover:text-white border-x-2 border-black px-2 py-1"
                  >
                    Register
                  </Link>
                </div>
              )}
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
            <Link
              to="/books-category"
              className="hover:bg-black hover:text-white px-2 py-1"
            >
              Books Category
            </Link>
          </li>
          <li>
            <Link
              to="/used-books"
              className="hover:bg-black hover:text-white px-2 py-1"
            >
              Used Books
            </Link>
          </li>
          <li>
            <Link
              to="/sell-books"
              className="hover:bg-black hover:text-white px-2 py-1"
            >
              Sell Books
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end font-wallPoet uppercase text-xl hidden lg:flex">
        {user?.email ? (
          <div className="flex items-center gap-2 uppercase">
            <Link to='/dashboard' className="flex items-center">
              <img className="h-10 w-10" src={user?.photoURL} alt="" />
              <h3 className="bg-black hover:bg-white hover:text-black hover:border-y-2 hover:border-black h-10 flex items-center text-white px-2 py-1">
                {user?.displayName}
              </h3>
            </Link>
            <Link>
              <button
                className="uppercase shadow py-1 px-2 border-x-2 hover:border-y-2 hover:border-black border-black"
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
            <Link
              to="/register"
              className="bg-black text-white hover:border-y-2 hover:border-black hover:bg-white hover:text-black px-2 py-1"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
