import PizzaItem from "./PizzaItem/index";
import Skeleton from "./PizzaItem/Skeleton";

function PizzaList({ pizzas, isLoading }) {
  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
    </div>
  );
}

export default PizzaList;
