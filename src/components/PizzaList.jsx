import PizzaItem from "./PizzaItem";
import pizzasDB from "../assets/pizzas.json";
function PizzaList() {
  return (
    <div className="content__items">
      {pizzasDB.map((pizza) => (
        <PizzaItem key={pizza.id} {...pizza} />
      ))}
    </div>
  );
}

export default PizzaList;
