import { useContext } from "react";
import { useTheme } from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import Dark from "../../icons/Dark";
import Light from "../../icons/Light";
import { Button } from "./styles";

const ThemeButton = () => {
  const { lightMode, dispatch } = useContext(AppContext);
  const theme = useTheme();

  const handleChangeTheme = () => {
    dispatch({ type: "THEME_TOGGLE" });
  };

  return (
    <Button onClick={handleChangeTheme}>
      {lightMode ? (
        <Dark fillColor={theme.palette.text.primary} />
      ) : (
        <Light fillColor={theme.palette.text.primary} />
      )}
    </Button>
  );
};

export default ThemeButton;
