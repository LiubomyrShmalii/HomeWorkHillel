import { useEffect, useState } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import s from "./Menu.module.css";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const result = await response.json();
        setPizzas(result.data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className={s.menu_container}>
      {pizzas.length > 0 ? (
        pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
      ) : (
        <p>Sorry, we are not working today.</p>
      )}
    </div>
  );
}

export default Menu;
