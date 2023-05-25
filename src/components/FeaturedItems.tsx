import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedItems = () => {
  const { products } = useContext(ProductsContext);
  const featuredProducts = products.slice(0, 10);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slideToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const featuredProductItems = featuredProducts.map((product) => (
    <article
      className="px-3 py-5 pb-8 relative border min-h-full mx-5"
      key={product.id}
    >
      <ul className="">
        <li className="max-h-[100%]">
          <img
            className="h-[150px] mx-auto mb-5"
            src={product.image}
            alt={product.description}
          />
        </li>
        <li className="px-3 mb-5 text-center">{product.title}</li>
        <li className="text-center mt-5 text-[#2463EB] absolute bottom-2 left-[50%] translate-x-[-50%]">
          £{product.price}
        </li>
      </ul>
    </article>
  ));

  return (
    <article className="container mx-auto py-16">
      <div className="relative">
        <span className="absolute bottom-7 w-7 h-1 bg-[#2463EB]"></span>
        <h2 className="font-bold">Featured Items</h2>
      </div>
      {/* <Carousel showDots={true} responsive={responsive} className="mt-5">
        {featuredProductItems}
      </Carousel> */}
      <Carousel showDots={true} responsive={responsive} className="pb-10">
        {featuredProductItems}
      </Carousel>
    </article>
  );
};

export default FeaturedItems;
