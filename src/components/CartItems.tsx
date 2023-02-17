import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import { CartContext } from "../context/ShoppingCartContext";

function CartItems() {
  const { cartItems, addProductToCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <div className="pt-10 container mx-auto ">
      {products.map((product) => {
        return (
          <div key={product.id} className="flex justify-between ">
            <div className="flex">
              <div>
                <img
                  className="max-w-[100px]"
                  src={product.image}
                  alt={product.description}
                />
              </div>
              <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
            <div>
              <button>x</button>
              <button onClick={() => addProductToCart(product.id)}>+</button>

              <p>Total: </p>
            </div>
          </div>
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
