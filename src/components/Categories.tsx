import { FC } from "react";
import { Link } from "react-router-dom";
import { Categories as ICategories } from "../context/productsContext";

interface IProps {
  categories: ICategories[];
}

const Categories: FC<IProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((category: string, index: number) => (
        <Link
          key={index}
          to={`/store/${category}`}
          className="border m-4 bg-[#1B6BDD] text-white rounded p-3 "
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
