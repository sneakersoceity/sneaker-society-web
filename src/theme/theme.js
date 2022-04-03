import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const MyTheme = createTheme({
  palette: {
    background: {
      main: "#99D6EA",
    },
    primary: {
      // Purple and green play nicely together.
      main: "#00000",
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[500],
    },
  },
});

MyTheme.typography.h1 = {
  fontSize: "2.8rem",
  "@media (min-width:600px)": {
    fontSize: "4rem",
  },
  [MyTheme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

MyTheme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [MyTheme.breakpoints.up("md")]: {
    fontSize: "2.3rem",
  },
};

MyTheme.typography.h6 = {
  fontSize: ".6rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [MyTheme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};
