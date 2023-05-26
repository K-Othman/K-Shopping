import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Categories as ICategories } from "../context/ProductsContext";

interface IProps {
  categories: ICategories[];
}

const Categories: FC<IProps> = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-center flex-wrap pt-4 md:hidden">
        <button
          className={`border bg-[#1B6BDD] text-white rounded p-3 px-6  ${
            isDropdownOpen ? "bg-[#2463EB]" : ""
          }`}
          onClick={handleDropdownToggle}
        >
          Categories
        </button>
      </div>

      <div
        className={`${
          isDropdownOpen ? "opacity-1" : "opacity-0"
        } absolute w-1/3 left-[45%] translate-x-[-50%] top-[60px] mt-2 bg-white rounded-md shadow-lg z-10 text-start md:hidden transition duration-500`}
      >
        <button
          className="absolute right-0 top-0 hover:bg-gray-200 px-2 text-sm"
          onClick={handleDropdownToggle}
        >
          x
        </button>
        <div className="py-2">
          {categories.map((category: string, index: number) => (
            <Link
              key={index}
              to={`/store/${category}`}
              className="block px-4 py-2 text-xs text-gray-800 hover:bg-gray-200"
              onClick={handleDropdownToggle}
            >
              {category.toLocaleUpperCase()}
            </Link>
          ))}
          <Link
            to="/store"
            className="block px-4 py-2 text-xs text-gray-800 hover:bg-gray-200"
            onClick={handleDropdownToggle}
          >
            ALL
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center flex-wrap pt-4">
        {categories.map((category: string, index: number) => (
          <Link
            key={index}
            to={`/store/${category}`}
            className="border m-4 bg-[#1B6BDD] text-white rounded p-3"
          >
            {category}
          </Link>
        ))}
        <Link
          to="/store"
          className="border m-4 bg-[#1B6BDD] text-white rounded p-3 px-9"
        >
          All
        </Link>
      </div>
    </div>
  );
};

export default Categories;
