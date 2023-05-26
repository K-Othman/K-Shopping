// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
// import { ProductsContext } from "../context/ProductsContext";
// import { CartContext } from "../context/ShoppingCartContext";

// function Navbar() {
//   const { cartQuantity, cartItems } = useContext(CartContext);
//   const { user } = UserAuth();

//   return (
//     <>
//       <nav className=" dark:bg-gray-700 mb-4">
//         <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 container ">
//           <div className="flex items-center">
//             <p>K-Shopping</p>

//             <ul className="flex justify-between flex-1 ">
//               <div className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium relative ">
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-900 dark:text-white hover:underline"
//                     aria-current="page"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-gray-900 dark:text-white hover:underline"
//                   >
//                     Store
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-gray-900 dark:text-white hover:underline"
//                   >
//                     About
//                   </Link>
//                 </li>
//               </div>

//               <div className="">
//                 <li className="">
//                   {user?.displayName || user?.email ? (
//                     <div className="">
//                       <p>
//                         {user.displayName
//                           ? ` Hi ${user.displayName.split(" ")[0]} `
//                           : ""}{" "}
//                       </p>
//                     </div>
//                   ) : (
//                     <Link
//                       to="/login"
//                       className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                     >
//                       Log In
//                     </Link>
//                   )}
//                 </li>

//                 <div>
//                   {cartItems.length > 0 ? (
//                     <Link to={"/carts"}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 576 512"
//                         fill="currentColor"
//                         className=" border-cyan-800 w-10 top-12 right-13 text-[#0C6DFD] absolute rounded border p-2  hover:bg-[#0C6DFD] hover:text-white  transition  "
//                       >
//                         <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
//                       </svg>

//                       <div className=" absolute top-[80px] right-13 text-white bg-red-500 w-5 h-5 rounded-full flex justify-center items-center">
//                         {cartQuantity}
//                       </div>
//                     </Link>
//                   ) : null}
//                 </div>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
// export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { CartContext } from "../context/ShoppingCartContext";
import { GiHamburgerMenu } from "react-icons/Gi";

const Navbar = () => {
  const { cartQuantity, cartItems } = useContext(CartContext);
  const { user } = UserAuth();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

              <div className="text-gray-300 hover:bg-gray-700">
                {user?.displayName || user?.email ? (
                  <div className="">
                    <p>
                      {user.displayName
                        ? ` Hi, ${user.displayName.split(" ")[0]} `
                        : ""}{" "}
                    </p>
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
              <Link to="/carts" className="relative">
                <svg
                  className="h-6 w-6 fill-current text-gray-300 hover:bg-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7H5.929L5.07 4H2v2h2.929l2.768 10.703c.259 1.025 1.204 1.797 2.337 1.797H16v-2H10.24l-.53-2H18V7zm0 2v7H8.768l-.762-3H18V9h-3z" />
                </svg>

                {cartQuantity > 0 && (
                  <div className="absolute top-[-10px] right-[-10px] text-gray-300 hover:bg-gray-700 w-5 h-5 rounded-full flex justify-center items-center  text-xs">
                    {cartQuantity}
                  </div>
                )}
              </Link>
            </div>
          </div>

          <div className="block sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <GiHamburgerMenu aria-hidden />
              ) : (
                <GiHamburgerMenu />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute z-20 bg-gray-800 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Home */}
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 font-medium"
            >
              Home
            </Link>

            {/* Store */}
            <Link
              to="/store"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium "
            >
              Store
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/carts"
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Shopping Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
