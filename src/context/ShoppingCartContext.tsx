import {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

type Props = {
  children: ReactNode;
};

interface IShoppingCart {
  cartItems: CartItem[];
  addProductToCart: (id: number) => void;
  decreaseProductFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  cartQuantity: number;
}

export const CartContext = createContext<IShoppingCart>({} as IShoppingCart);

export const ShoppingCartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  useEffect(() => {
    setCartQuantity(
      cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
    );
  }, [cartItems]);

  const addProductToCart = (productId: number) => {
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };

  const decreaseProductFromCart = (productId: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const deleteFromCart = (productId: number) => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== productId);
    });
  };

  const CartContextValue = useMemo(
    () => ({
      cartItems,
      addProductToCart,
      decreaseProductFromCart,
      deleteFromCart,
      cartQuantity,
    }),
    [
      cartItems,
      addProductToCart,
      decreaseProductFromCart,
      deleteFromCart,
      cartQuantity,
    ]
  );

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
