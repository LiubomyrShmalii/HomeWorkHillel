import s from "./Cart.module.css";
import { cartItems } from "../../data/cartData";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router";


const Cart = () => {
  return (
    <div className={s.container}>
      <Link to="/menu" className={s.back_link}>
        ← Back to menu
      </Link>
      <h1 className={s.cart_title}>Your cart, LIUBOMYR</h1>

      <div className={s.cart_items}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className={s.cart_actions}>
        <Button className={s.order_btn} text="Order pizzas" />
        <Button className={s.clear_btn} text="Clear cart" />
      </div>
    </div>
  );
};

export default Cart;
