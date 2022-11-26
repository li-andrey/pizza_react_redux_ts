import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import { useSelector } from "react-redux";
import axios from "axios";
import { SearchContext } from "../App";

function Home() {
  const { categoryId, sortType } = useSelector((state) => state.filter);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const sortBy = sortType.property.replace("-", "");
    const order = sortType.property.includes("-") ? "desc" : "asc";
    axios
      .get(
        `https://637db4019c2635df8f8c982e.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <PizzaList pizzas={pizzas} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Home;
