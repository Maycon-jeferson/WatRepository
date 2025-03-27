import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import ThemeToggle from "component/Theme/ThemeToggle";
import TextBox from "component/TextBox/TextBox";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Home />
      <ThemeToggle />
      <TextBox />
    </React.StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado.");
}