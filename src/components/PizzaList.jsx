import React from "react";
import { SearchContext } from "../App";
import PizzaItem from "./PizzaItem/index";
import Skeleton from "./PizzaItem/Skeleton";

function PizzaList({ pizzas, isLoading }) {
  const { searchValue } = React.useContext(SearchContext);
  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : pizzas
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
    </div>
  );
}

export default PizzaList;
