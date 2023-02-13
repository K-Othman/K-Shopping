import {
  createContext,
  ReactNode,
  useState,
  FC,
  useMemo,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type Product = {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

export interface IProductContext {
  // is for the context - things you will pass down from the context
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  // setProducts: ({});
}

type Props = {
  children: ReactNode;
};

export const ProductsContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductContextProivder: FC<Props> = ({ children }) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState<Product[]>([]);

  function getProducts() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ProductContextValue = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products, setProducts]
  );

  return (
    // <ProductsContext.Provider value={{ products, setProducts }}>
    <ProductsContext.Provider value={ProductContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
