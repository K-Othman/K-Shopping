import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/ShoppingCartContext";

function Navbar() {
  const { cartQuantity, cartItems } = useContext(CartContext);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className=" dark:bg-gray-700 mb-4 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 container">
          <div className="flex items-center">
            <ul className="flex justify-between flex-1 ">
              <div className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium relative ">
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
                  {user?.displayName ? (
                    <div className="flex gap-2 flex-col">
                      <p>Hi, {user.displayName.split(" ")[0]} </p>
                      <button
                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={handleSignOut}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Log In
                    </Link>
                  )}
                </li>
                {cartItems.length > 0 ? (
                  <Link to={"/carts"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      className=" border-cyan-800 w-10 top-20 right-12 text-[#0C6DFD] rounded border p-2 absolute hover:bg-[#0C6DFD] hover:text-white  transition  "
                    >
                      <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>

                    <div className=" absolute top-[113px] right-12 text-white bg-red-500 w-5 h-5 rounded-full flex justify-center items-center ">
                      {cartItems.length}
                    </div>
                  </Link>
                ) : null}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
