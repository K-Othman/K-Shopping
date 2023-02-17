import { createContext, FC, ReactNode, useMemo, useState } from "react";
import CartItems from "../components/CartItems";

type CartItem = {
  // Product Item ID
  id: number;
  // Product Quantity
  quantity: number;
};

type Props = {
  children: ReactNode;
};

interface IShoppingCart {
  // openCart: () => void;
  // closeCart: () => void;
  cartItems: CartItem[];
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
}

export const CartContext = createContext<IShoppingCart>({} as IShoppingCart);

export const ShoppingCartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const openCart = () => setIsOpen(true);
  // const closeCart = () => setIsOpen(false);

  const increaseProduct = (productId: number) => {
    if (cartItems.length < 1) {
      setCartItems([{ id: productId, quantity: 1 }]);
    } else {
      cartItems.forEach((item: CartItem) => {
        if (item.id === productId) {
          setCartItems([
            ...cartItems,
            { id: productId, quantity: item.quantity + 1 },
          ]);
        } else {
          setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
      });
    }
    const decreaseProduct = (productId: number) => {
      if (cartItems.length < 1) {
        setCartItems([]);
      } else {
        cartItems.forEach((item: CartItem) => {
          if (item.id === productId) {
            setCartItems([
              ...cartItems,
              { id: productId, quantity: item.quantity - 1 },
            ]);
          } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
          }
        });
      }

    console.log(cartItems);
  };

  const CartContextValue = useMemo(
    () => ({
      cartItems,
      increaseProduct,
      decreaseProduct
    }),
    [cartItems, increaseProduct, decreaseProduct]
  );

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
