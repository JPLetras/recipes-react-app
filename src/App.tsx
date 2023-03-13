import { useContext } from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { AppContext } from "./contexts/AppContext";
import { Container } from "./styles";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const { lightMode } = useContext(AppContext);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;
