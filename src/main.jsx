// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UserNameProvider from "./context/UserNameContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserNameProvider>
      <App />
    </UserNameProvider>
  </BrowserRouter>
);
