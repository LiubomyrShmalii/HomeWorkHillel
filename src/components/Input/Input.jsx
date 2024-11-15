import s from "./Input.module.css";

function Input() {
  return (
    <input type="text" placeholder="Your full name"   className={s.input} />
  )
}

export default Input