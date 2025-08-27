import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { LangProvider } from "./LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LangProvider>
    <App />
  </LangProvider>
);
