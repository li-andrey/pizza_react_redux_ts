import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";

const arrCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state:any) => state.filter.categoryId);

  return (
    <div className="categories">
      <ul>
        {arrCategories.map((cat, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategory(i))}
            className={categoryId == i ? "active" : ""}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
