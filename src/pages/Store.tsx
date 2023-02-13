import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

function Store() {
  const productsList = useContext(ProductsContext);

  return (
    <div>
      {productsList.products.map((product) => {
        return (
          <section key={product.id} className="h-80 flex ">
            <img src={product.image} alt={product.description} />
            <div>
              <p> {product.title} </p>
              <p> {product.category} </p>
              <div>
                <p> {product.rating.count} </p>
                <p> {product.rating.rate} </p>
              </div>
              <p> {product.price} </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Store;
