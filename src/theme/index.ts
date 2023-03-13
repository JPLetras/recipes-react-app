const baseTheme = {
  typography: {
    fontFamily: "Tilt Neon, cursive",
    fontSize: "1.5rem",
  },
};

export const lightTheme = {
  ...baseTheme,
  palette: {
    primary: "#429EBD",
    secondary: "#F27F0C",
    terciary: "#9FE7F5",
    background: {
      primary: "#E0FFFF",
      secondary: "#E0FFFF",
    },
    text: {
      primary: "#383A47",
      secondary: "#C4C4C4",
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  palette: {
    primary: "#F7AD19",
    secondary: "#F7AD19",
    terciary: "#9FE7F5",
    background: {
      primary: "#053F5C",
      secondary: "#429EBD",
    },
    text: {
      primary: "#F7AD19",
      secondary: "#C4C4C4",
    },
  },
};
