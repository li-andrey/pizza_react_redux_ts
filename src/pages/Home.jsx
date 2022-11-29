import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas, pizzasSelector } from "../redux/slices/pizzasSlice";
import { filterSelector } from "../redux/slices/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sortType, searchValue } = useSelector(filterSelector);
  const { items, status } = useSelector(pizzasSelector);
  const getPizzas = async () => {
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const sortBy = sortType.property.replace("-", "");
    const order = sortType.property.includes("-") ? "desc" : "asc";
    dispatch(fetchPizzas({ category, sortBy, order }));
  };

  React.useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div>
          <h2>Ошибка запроса</h2>
        </div>
      ) : (
        <PizzaList pizzas={items} isLoading={status} />
      )}
    </div>
  );
}

export default Home;
