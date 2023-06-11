import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShoppingCartContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ProductsContext } from "../../context/productsContext";

function CartItems() {
  const {
    cartItems,
    addProductToCart,
    decreaseProductFromCart,
    deleteFromCart,
  } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const total = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            {cartItems.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;

              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
                >
                  <img
                    className="w-24 h-24 mb-4 md:mr-4 object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{product.title}</p>
                    <p className="text-gray-500">£{product.price}</p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <button
                      className="bg-main_color hover:bg-hover_color text-white rounded-full py-1 px-3"
                      onClick={() => addProductToCart(item.id)}
                    >
                      +
                    </button>
                    <div className="px-4 mx-2 bg-gray-100 rounded">
                      {item.quantity}
                    </div>
                    <button
                      className="bg-main_color hover:bg-hover_color text-white rounded-full py-1 px-3"
                      onClick={() => decreaseProductFromCart(item.id)}
                    >
                      -
                    </button>
                    <MdOutlineDeleteOutline
                      onClick={() => deleteFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500 cursor-pointer ml-4"
                      size={20}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-4">Total</p>
              <p className="text-2xl font-bold text-main_color">
                £{total.toFixed(2)}
              </p>
            </div>
            <Link
              to="/checkout"
              className="block bg-main_color hover:bg-hover_color text-white font-semibold py-2 px-4 rounded mb-5"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
}

export default CartItems;
