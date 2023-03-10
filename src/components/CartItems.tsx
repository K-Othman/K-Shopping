import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/ShoppingCartContext";

function CartItems() {
  const {
    cartItems,
    addProductToCart,
    decreaseProductFromCart,
    deleteFromCart,
  } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <div className="pt-10 container mx-auto ">
      {cartItems.map((item) => {
        const itemm = products.find((i) => i.id === item.id);
        if (itemm === null) return null;

        return (
          <div
            key={item.id}
            className="flex justify-between my-8 flex-col md:flex-row "
          >
            <div className="flex ">
              <img
                className="max-w-[100px] mr-4 "
                src={itemm?.image}
                alt={itemm?.description}
              />

              <div>
                <p>{itemm?.title}</p>
                <p>£{itemm?.price}</p>
              </div>
            </div>
            <div className="flex flex-col mx-auto ">
              <div className="flex">
                <button
                  className="bg-[#0C6DFD] text-white rounded  pr-4 pb-2 pl-4 "
                  onClick={() => addProductToCart(item.id)}
                >
                  +
                </button>
                <div className="py-1  px-4 mx-2 bg-white rounded ">
                  {item.quantity}
                </div>

                <button
                  className="bg-[#0C6DFD] text-white rounded  pr-4 pb-4 pl-4 "
                  onClick={() => decreaseProductFromCart(item.id)}
                >
                  _
                </button>
              </div>
              <button
                className="bg-[#BB2D3B] text-white rounded mx-auto mt-2 text-sm py-[2px] px-1 "
                onClick={() => deleteFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end text-[#757F85] ">
        Total: £
        {cartItems
          .reduce((total, i) => {
            const item = products.find((product) => product.id === i.id);
            return total + (item?.price || 0) * i.quantity;
          }, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default CartItems;
