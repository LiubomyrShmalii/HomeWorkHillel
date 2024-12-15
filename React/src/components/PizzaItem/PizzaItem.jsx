import { useState } from "react";
import s from "./PizzaItem.module.css";
import Button from "../Button/Button";

function PizzaItem(props) {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = props;
  const [count, setCount] = useState(0);

  const rigthIngredients = ingredients
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(", ");

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={s.pizza_item}>
      <img src={imageUrl} alt={name} className={s.pizza_image} />
      <div className={s.pizza_info}>
        <h2>{name}</h2>
        <p className={s.ingredients}>{rigthIngredients}</p>

        {soldOut ? (
          <p className={s.sold_out}>SOLD OUT</p>
        ) : (
          <p className={s.price}>€{unitPrice}.00</p>
        )}
      </div>

      {!soldOut && (
        <div className={s.cart_controls}>
          {count === 0 ? (
            <Button onClick={increment} className={s.add_to_cart} text="ADD TO CART" />
          ) : (
            <div className={s.counter}>
              <Button onClick={decrement} className={s.counter_button} text='-' />
              <span>{count}</span>
              <Button onClick={increment} className={s.counter_button} text='+' />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PizzaItem;
