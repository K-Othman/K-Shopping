import {
  createContext,
  ReactNode,
  useState,
  FC,
  useMemo,
  useEffect,
} from "react";

export type Product = {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

export type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface IProductContext {
  products: Product[];
  categories: Categories[];
  loading: boolean;
}

type Props = {
  children: ReactNode;
};

export const ProductsContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductContextProivder: FC<Props> = ({ children }) => {
  const baseUrl = "https://fakestoreapi.com";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories] = useState<Categories[]>([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  function getProducts() {
    setLoading(true);
    fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ProductContextValue = useMemo(
    () => ({
      products,
      categories,
      loading,
    }),
    [products, categories, loading]
  );

  return (
    <ProductsContext.Provider value={ProductContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
