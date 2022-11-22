import React from "react";
function Categories() {
  const arrCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeId, setActiveId] = React.useState(0);
  return (
    <div className="categories">
      <ul>
        {arrCategories.map((category, i) => (
          <li
            key={i}
            onClick={() => setActiveId(i)}
            className={activeId == i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
