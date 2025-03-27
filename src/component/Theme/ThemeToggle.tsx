import { useState } from "react";
import { darkTheme, lightTheme, GlobalStyle, Button } from "./style";
import { ThemeProvider } from "styled-components"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>
        <Button onClick={toggleTheme}>Trocar Tema</Button>
      </div>
    </ThemeProvider>
  );
}
