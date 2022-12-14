import React from "react";
import { useSelector } from "react-redux";
import { PizzaType } from "../redux/slices/pizzasSlice";
import PizzaItem from "./PizzaItem/index";
import Skeleton from "./PizzaItem/Skeleton";

type PizzaListProps = {
  pizzas: PizzaType[];
  isLoading: string;
}

const PizzaList: React.FC<PizzaListProps> = ({ pizzas, isLoading }) => {
  const searchValue = useSelector((state: any) => state.filter.searchValue);

  return (
    <div className="content__items">
      {isLoading === "loading"
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : pizzas
          .filter((obj) =>
            obj.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((pizza) => (

            <PizzaItem key={pizza.id} {...pizza} />

          ))}
    </div>
  );
}

export default PizzaList;
