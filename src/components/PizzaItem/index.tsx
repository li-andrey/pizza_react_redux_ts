import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, CartItem, cartSelectorById } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";


type PizzaItemProps = {
  id: string;
  title: string; price: number; imageUrl: string; types: number[]; sizes: number[];
}
const PizzaItem: React.FC<PizzaItemProps> = ({ id, title, price, imageUrl, types, sizes }) => {
  const pizzasTypes = ["тонкое", "традиционное"];
  const [pizzaType, setPizzaType] = React.useState(0);
  const [pizzaSize, setPizzaSize] = React.useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(cartSelectorById(id));
  const addedItem = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: pizzasTypes[pizzaType],
      size: sizes[pizzaSize],
      count: 0
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <Link to={"/pizza/" + id} key={id}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setPizzaType(typeId)}
              className={pizzaType === typeId ? "active" : ""}
            >
              {pizzasTypes[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((s, i) => (
            <li
              key={i}
              onClick={() => setPizzaSize(i)}
              className={pizzaSize === i ? "active" : ""}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          className="button button--outline button--add"
          onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedItem > 0 && <i>{addedItem}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaItem;
