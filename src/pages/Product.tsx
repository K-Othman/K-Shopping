import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductsContext,
  Product as IProduct,
} from "../context/ProductsContext";
import { CartContext } from "../context/ShoppingCartContext";

const Product = () => {
  const { products, loading } = useContext(ProductsContext);
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    if (productId && products) {
      const filteredProduct = products.find((item) => {
        return item.id.toString() === productId;
      });
      setProduct(filteredProduct);
    }
  }, [product, productId, loading]);

  if (loading) {
    return (
      <span className="loader  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "></span>
    );
  }

  if (!product) return <>Sorry, no products found.</>;

  return (
    <section className="p-5 flex justify-between items-centr container mx-auto pt-16 h-[calc(100vh-65px)]">
      <div className="bg-white">
        <img
          className=" pr-4 max-h-[100%]"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="bg-white w-2/3  px-5 py-4 ">
        {" "}
        {/* h-[500px] */}
        <h2 className="font-bold text-xl mb-3 ">{product.title}</h2>
        <p className="text-[#757F85] text-xl pb-3  "> {product.category} </p>
        <p className="text-[#757F85] leading-6 pb-3 ">
          {" "}
          {product.description}{" "}
        </p>
        <p> {product.rating.rate} </p>
        <p className="text-red-500 font-bold ">
          {" "}
          {product.rating.count < 10 ? "Low Stock" : null}{" "}
        </p>
        <p className="text-[#757F85] ">Price £{product.price} </p>
        <div>
          <button
            className="border mt-5 w-[50%] rounded-lg py-2 bg-[#1A6CDD] text-white "
            onClick={() => addProductToCart(product.id)}
          >
            + Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default Product;
