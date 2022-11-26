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

function Categories() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

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
