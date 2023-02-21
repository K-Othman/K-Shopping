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
  // const idd = cartItems.find((i) => i.id);
  // const item = products.find((i) => i.id === cartItems.find((i) => i.id)?.id);
  // const item = cartItems.find((i) => (i.id === products.find((i) => i.id))?.id);
  console.log(cartItems, "ITEMMM");

  // useEffect(() => {
  //   const item = products.find((i) => i.id === cartItems.find((i) => i.id)?.id);
  //   console.log(item, "iteeem");
  // }, []);

  return (
    <div className="pt-10 container mx-auto ">
      {/* {products.map((product) => { */}
      {/* return ( */}
      <div className="flex justify-between ">
        <div className="flex">
          <div>
            <img
              className="max-w-[100px]"
              src={item?.image}
              alt={item?.description}
            />
          </div>
          <div>
            <p>{item?.title}</p>
            <p>{item?.price}</p>
          </div>
        </div>
        {/* <div>
              <button onClick={() => deleteFromCart(item.id)}>x</button>
              <button onClick={() => addProductToCart(product.id)}>+</button>
              <button onClick={() => decreaseProductFromCart(product.id)}>
                _
              </button>

              <p>Total: </p>
            </div> */}
      </div>
      {/* );
      })} */}
    </div>
  );
}

export default CartItems;

// what I need to create the shopping cart

//   Add item button
// cart page => has the product in it
// counter to count the products and total for the total price
