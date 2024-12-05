import { NavLink } from "react-router";
import s from "./Header.module.css";
import { useContext } from "react";
import { UserNameContext } from "../../App";

const enterName = true;

const Header = () => {
  const { userName, setUserName } = useContext(UserNameContext)

  return (
    <header className={s.header}>
      <div className={s.logo}>PIZZA DAY</div>
      {enterName && (
        <>
          <nav>
            <NavLink to="/menu" className={s.link}>
              MENU
            </NavLink>
            <NavLink to="/cart" className={s.link}>
              CART
            </NavLink>
          </nav>
          <div className={s.search_and_user}>
            <input
              type="text"
              className={s.search_bar}
              placeholder="Search for the order #"
            />
            <div className={s.username}>{userName}</div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
