import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { CartContext } from "../../context/ShoppingCartContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { cartQuantity, cartItems } = useContext(CartContext);
  const { user, logOut } = UserAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Website Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-lg">
              K-Shopping
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden sm:block">
            <div className="flex space-x-4 items-center">
              {/* Home */}
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              {/* Store */}
              <Link
                to="/store"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Store
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>

              {/* Login */}
              <div className="text-gray-300">
                {user?.displayName || user?.email ? (
                  <div className="flex text-sm gap-1">
                    <p>
                      {user.displayName
                        ? ` Hi, ${user.displayName.split(" ")[0]} `
                        : ""}{" "}
                    </p>
                    <span>|</span>
                    <button
                      className="font-semibold hover:bg-gray-700 underline"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-300 hover:bg-gray-700 hover:underline"
                  >
                    Log In
                  </Link>
                )}
              </div>
              {/* Shopping Cart */}
              <div className="hover:bg-gray-700 p-2 rounded-md">
                <Link to="/carts" className="relative">
                  <svg
                    className="h-6 w-6 fill-current text-gray-300 rounded-md"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7H5.929L5.07 4H2v2h2.929l2.768 10.703c.259 1.025 1.204 1.797 2.337 1.797H16v-2H10.24l-.53-2H18V7zm0 2v7H8.768l-.762-3H18V9h-3z" />
                  </svg>

                  {cartQuantity > 0 && (
                    <div className="absolute top-[-10px] right-[-10px] text-gray-300 w-5 h-5 rounded-full flex justify-center items-center text-xs">
                      {cartQuantity}
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <Link
              to="/carts"
              className="absolute z-20 right-14 top-7 text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-300 hover:bg-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M19 7H5.929L5.07 4H2v2h2.929l2.768 10.703c.259 1.025 1.204 1.797 2.337 1.797H16v-2H10.24l-.53-2H18V7zm0 2v7H8.768l-.762-3H18V9h-3z" />
              </svg>

              {cartQuantity > 0 && (
                <div className="absolute top-0 right-1 text-gray-300 hover:bg-gray-700 w-5 h-5 rounded-full text-xs">
                  {cartQuantity}
                </div>
              )}
            </Link>
          </div>

          <div className="block sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <>
                  <GiHamburgerMenu aria-hidden />
                </>
              ) : (
                <>
                  <GiHamburgerMenu />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {isMenuOpen && (
        <div
          className="sm:hidden opacity-1 absolute z-20 bg-gray-800 w-full opacity-1 transition duration-300"
          ref={menuRef}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Home */}
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Store */}
            <Link
              to="/store"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Login */}
            <div className="text-gray-300 hover:bg-gray-700 px-3 py-2">
              {user?.displayName || user?.email ? (
                <div className="">
                  <p>
                    {user.displayName
                      ? ` Hi, ${user.displayName.split(" ")[0]} `
                      : ""}{" "}
                  </p>

                  <button
                    className="hover:bg-gray-700 py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSignOut();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 block py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
