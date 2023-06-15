import {
  createContext,
  ReactNode,
  useState,
  FC,
  useMemo,
  useEffect,
} from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

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
  renderRatingStars: (rate: number) => React.ReactNode;
}

type Props = {
  children: ReactNode;
};

export const ProductsContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductContextProvider: FC<Props> = ({ children }) => {
  const baseUrl = "https://fakestoreapi.com";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories] = useState<Categories[]>([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  // function getProducts() {
  //   setLoading(true);
  //   fetch(`${baseUrl}/products`, {
  //     mode: "no-cors",
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     });
  // }
  function getProducts() {
    setLoading(true);
    fetch(`${baseUrl}/products`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const renderRatingStars = (rate: number) => {
    const maxStars = 5;
    const roundedRate = Math.round(rate);
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < roundedRate) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<CiStar key={i} />);
      }
    }

    return stars;
  };

  const ProductContextValue = useMemo(
    () => ({
      products,
      categories,
      loading,
      renderRatingStars,
    }),
    [products, categories, loading]
  );

  return (
    <ProductsContext.Provider value={ProductContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
