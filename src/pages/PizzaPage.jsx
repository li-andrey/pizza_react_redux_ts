import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PizzaPage() {
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://637db4019c2635df8f8c982e.mockapi.io/pizzas/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при загрузке пиццы");
        navigate("/");
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка....</div>;
  }
  return (
    <div className="container">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <div className="pizza-block__price">от {pizza.price} ₽</div>
    </div>
  );
}

export default PizzaPage;
