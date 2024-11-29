import s from "./Header.module.css";

const enterName = true;

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>PIZZA DAY</div>
      {enterName && (
        <>
          <input
            type="text"
            className={s.search_bar}
            placeholder="Search for the order #"
          />
          <div className={s.username}>
            LIUBOMYR
            </div>
        </>
      )}
    </header>
  );
};

export default Header;
