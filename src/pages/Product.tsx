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

  return (
    <section className="p-5 flex justify-between gap- items-centr container mx-auto pt-16 h-[calc(100vh-65px)]">
      <div className="bg-white  max-h-[500px]  ">
        <img
          className=" pr-4 h-[100%] w-[100%] "
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="bg-white w-2/3 h-[500px]">
        <h2 className="font-bold text-xl mb-3 ">{product.title}</h2>
        <p className="text-[#757F85] "> {product.category} </p>
        <p> {product.description} </p>
        <p> {product.rating.rate} </p>
        <p className="text-red-500 font-bold ">
          {" "}
          {product.rating.count < 10 ? "Low Stock" : null}{" "}
        </p>
        <p>{product.price} </p>
      </div>
    </section>
  );
};
