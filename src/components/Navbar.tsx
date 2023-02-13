import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <>
      <nav className=" dark:bg-gray-700 mb-4 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 container">
          <div className="flex items-center">
            <ul className="flex justify-between flex-1 ">
              <div className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <Link
                    to="/"
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    About
                  </Link>
                </li>
              </div>
              <div className="flex gap-3 ">
                <li>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Sign up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
