import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
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
              className="dropdown-content border-l-4 border-black p-4 my-3 mx-3 font-wallPoet flex flex-col gap-3"
            >
              <li className="w-52">
                <Link className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1" to='/'>Books Category</Link>
              </li>
              <li className="w-52">
                <Link className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1" to='/'>Used Books</Link>
              </li>
              <li className="w-52">
                <Link className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1" to='/'>Sell Books</Link>
              </li>
              <li className="w-52">
                <Link className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1" to='/login'>Login</Link>
              </li>
              <li className="w-52">
                <Link className="border-l-2 border-black hover:bg-black hover:text-white px-2 py-1" to='/register'>Register</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="text-2xl font-wallPoet" ><span className="bg-black p-1 text-white">Book</span> Town</Link>
        </div>

        <div className="navbar-center text-xl font-wallPoet uppercase hidden lg:flex">
          <ul className="flex justify-between gap-5">
            <li>
              <Link className="hover:bg-black hover:text-white px-2 py-1">Books Category</Link>
            </li>
            <li>
              <Link className="hover:bg-black hover:text-white px-2 py-1">Used Books</Link>
            </li>
            <li>
              <Link className="hover:bg-black hover:text-white px-2 py-1">Sell Books</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end font-wallPoet text-xl hidden lg:flex">
          <div className="flex items-center gap-4">
            <Link to='/login' className="hover:bg-black hover:text-white px-2 py-1">Log In</Link>
            <Link to='/register' className="hover:bg-black hover:text-white px-2 py-1">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
