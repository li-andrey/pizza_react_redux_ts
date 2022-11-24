import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";

function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://637db4019c2635df8f8c982e.mockapi.io/pizzas")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
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
