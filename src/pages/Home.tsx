import React from "react";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaList from "../components/PizzaList";
import { useSelector } from "react-redux";
import { fetchPizzas, pizzasSelector } from "../redux/slices/pizzasSlice";
import { filterSelector } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sortType, searchValue } = useSelector(filterSelector);
  const { items, status } = useSelector(pizzasSelector);
  const getPizzas = async () => {
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const sortBy = sortType.property.replace("-", "");
    const order = sortType.property.includes("-") ? "desc" : "asc";
    dispatch(
      fetchPizzas({ category, sortBy, order }));
  };

  React.useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
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
