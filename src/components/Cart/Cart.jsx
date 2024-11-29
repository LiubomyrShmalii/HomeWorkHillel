import React from "react";
import s from "./Cart.module.css";
import { cartItems } from "../../data/cartData";
import Button from "../Button/Button";

const Cart = () => {
  return (
    <div className={s.container}>
      <a href="#" className={s.back_link}>
        ← Back to menu
      </a>
      <h1 className={s.cart_title}>Your cart, LIUBOMYR</h1>

      <div className={s.cart_items}>
        {cartItems.map((item) => (
          <div className={s.cart_item} key={item.id}>
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
