import { Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import PageNotFound from "./pages/PageNotFound";
import CartPage from "./pages/CartPage";
import { createContext, useState } from "react";

export const UserNameContext = createContext();

function App() {
  const [userName, setUserName] = useState("Gest")

  const userNameValue = {
    userName,
    setUserName,
  }

  return (
    <div>
      <UserNameContext.Provider value={userNameValue}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
