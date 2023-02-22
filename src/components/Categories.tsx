import { FC } from "react";
import { Link } from "react-router-dom";
import { Categories as ICategories } from "../context/ProductsContext";

interface IProps {
  categories: ICategories[];
}

const Categories: FC<IProps> = ({ categories }) => {
  return (
    <div className="flex justify-center flex-wrap pt-4 ">
      {categories.map((category: string, index: number) => (
        <Link
          key={index}
          to={`/store/${category}`}
          className="border m-4  bg-[#1B6BDD] text-white rounded p-3 "
        >
          {category}
        </Link>
      ))}
      <Link
        className="border m-4  bg-[#1B6BDD] text-white rounded p-3 px-9 "
        to={"/store"}
      >
        All
      </Link>
    </div>
  );
};

export default Categories;
