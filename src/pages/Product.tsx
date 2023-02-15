import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductsContext,
  Product as IProduct,
} from "../context/productsContext";

export const Product = () => {
  const { products, loading } = useContext(ProductsContext);
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>();

  useEffect(() => {
    if (productId && products) {
      const filteredProduct = products.find((item) => {
        return item.id.toString() === productId;
      });
      setProduct(filteredProduct);
    }
  }, [product, productId, loading]);

  if (loading) return <>Loading...</>;

  if (!product) return <>Sorry, no products found.</>;

  return <div>{product.id}</div>;
};
