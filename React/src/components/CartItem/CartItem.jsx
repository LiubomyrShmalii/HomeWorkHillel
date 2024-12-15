import Button from "../Button/Button";
import s from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={s.cart_item}>
      <span className={s.quantity_text}>{item.quantity}×</span>
      <span>{item.name}</span>
      <span className={s.price}>
        €{(item.price * item.quantity).toFixed(2)}
      </span>
      <div className={s.quantity_controls}>
        <Button className={s.quantity_btn} text="-" />
        <span>{item.quantity}</span>
        <Button className={s.quantity_btn} text="+" />
        <Button className={s.delete_btn} text="DELETE" />
      </div>
    </div>
  );
};

export default CartItem;
