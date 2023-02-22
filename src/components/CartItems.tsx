import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/productsContext";
import { CartContext } from "../context/ShoppingCartContext";

// type CartItemProps = {
//   id: number;
//   quantity: number;
// };

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
          <>
            <div key={item.id} className="flex justify-between my-8 ">
              <div className="flex">
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
              <div className="flex gap-4">
                <button onClick={() => deleteFromCart(item.id)}>x</button>
                <button onClick={() => addProductToCart(item.id)}>+</button>
                <div>{item.quantity}</div>
                <button onClick={() => decreaseProductFromCart(item.id)}>
                  _
                </button>
              </div>
            </div>
            <div>Total: {}</div>
          </>
        );
      })}
    </div>
  );
}

export default CartItems;

// what I need to create the shopping cart

//   Add item button
// cart page => has the product in it
// counter to count the products and total for the total price
