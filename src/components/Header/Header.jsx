import s from "./Header.module.css";

// тут має бути стан (чи ввів клієнт імя)
const enterName = true;

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>PIZZA DAY</div>
      {/* якщо є введене імя то виводимо додоткого 2 елементи */}
      {enterName && (
        <>
          <input
            type="text"
            className={s.search_bar}
            placeholder="Search for the order #"
          />
          <div className={s.username}>
            {/* {enterName} */}
            LIUBOMYR
            </div>
        </>
      )}
    </header>
  );
};

export default Header;
