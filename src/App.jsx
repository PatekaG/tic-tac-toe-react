import Router from "./Router";
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const {theme} = useContext(ThemeContext);

  const mode = (theme === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;
