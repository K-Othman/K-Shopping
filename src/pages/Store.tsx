import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext, Product } from "../context/ProductsContext";
import Categories from "../components/Categories";
import { CartContext } from "../context/ShoppingCartContext";

function Store() {
  const { categories, products, loading } = useContext(ProductsContext);
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    if (products && category) {
      setFilteredProducts(
        products.filter((product) => {
          return product.category === category;
        })
      );
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <section>
      <Categories categories={categories} />
      <div
        className="container mx-auto pt-10 "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px , 1fr))",
          gap: "30px",
        }}
      >
        {filteredProducts.map((product) => {
          return (
            <div className="border bg-white p-1" key={product.id}>
              <Link to={`/products/${product.id}`} className=" ">
                <img
                  className="h-[200px] m-auto "
                  src={product.image}
                  alt={product.description}
                  style={{ objectFit: "fill" }}
                />
                <div className="p-2  mx-auto ">
                  <p className="font-bold py-3 ">
                    {product.title.slice(0, 30)}...
                  </p>
                  <p className="text-[#757F85] pb-2"> {product.category} </p>
                  <div>
                    <p className="text-red-500">
                      {product.rating.count < 10 ? "Low Stock" : null}
                    </p>
                    <p> {product.rating.rate} </p>
                  </div>
                  <p className="pt-2 text-[#757F85]"> ??{product.price} </p>
                </div>
              </Link>
              <div>
                <button
                  className="border w-[100%] m-auto rounded py-2 bg-[#1A6CDD] text-white "
                  onClick={() => addProductToCart(product.id)}
                >
                  + Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Store;
