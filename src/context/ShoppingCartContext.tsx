import {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from "react";
// import CartItems from "../components/CartItems";

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
  addProductToCart: (id: number) => void;
  decreaseProductFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  cartQuantity: number;
  // cartQuauntity: number;
}

export const CartContext = createContext<IShoppingCart>({} as IShoppingCart);

export const ShoppingCartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  // const [isOpen, setIsOpen] = useState(false);
  // const openCart = () => setIsOpen(true);
  // const closeCart = () => setIsOpen(false);
  useEffect(() => {
    setCartQuantity(
      cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
    );
  }, [cartItems]);

  // const addProductToCart = (productId: number) => {
  //   if (cartItems.length < 1) {
  //     setCartItems([{ id: productId, quantity: 1 }]);
  //   } else {
  //     cartItems.forEach((item: CartItem) => {
  //       if (item.id === productId) {
  //         setCartItems([
  //           ...cartItems,
  //           { id: productId, quantity: item.quantity + 1 },
  //         ]);
  //       } else {
  //         setCartItems([...cartItems, { id: productId, quantity: 1 }]);
  //       }
  //     });
  //   }
  // };
  function addProductToCart(productId: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === productId) == null) {
        return [...cartItems, { id: productId, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const decreaseProductFromCart = (productId: number) => {
    cartItems.forEach((item: CartItem) => {
      if (item.quantity === 1) {
        setCartItems([...cartItems.filter((i) => i.id !== productId)]);
      } else {
        setCartItems([
          ...cartItems,
          { id: productId, quantity: item.quantity - 1 },
        ]);
      }
    });
  };

  const deleteFromCart = (id: number) => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  };

  console.log(cartItems);

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
