import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PizzaItem from "./PizzaItem/index";
import Skeleton from "./PizzaItem/Skeleton";

function PizzaList({ pizzas, isLoading }) {
  const searchValue = useSelector((state) => state.filter.searchValue);

  return (
    <div className="content__items">
      {isLoading === "loading"
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : pizzas
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((pizza) => (
              <Link to={"/pizza/" + pizza.id} key={pizza.id}>
                <PizzaItem {...pizza} />
              </Link>
            ))}
    </div>
  );
}

export default PizzaList;
