import s from "./PizzaItem.module.css";

function PizzaItem(props) {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = props;

  const rigthIngredients = ingredients.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(", ");
  console.log(rigthIngredients);

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

      {!soldOut && <button className={s.add_to_cart}>ADD TO CART</button>}
    </div>
  );
}

export default PizzaItem;
