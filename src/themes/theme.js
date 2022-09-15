import { createTheme } from "@mui/material/styles";
import { blue, grey, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      alternate: grey[700],
    },
    secondary: {
      main: blue[500],
    },
    hashtags: {
      main: "#FF69B4",
    },
    button: {
      main: "#FFBB00",
      contrastText: "#FFF"
    },
    themeColor: {
      blue: "#46A8F6",
      green: "#34A853",
      red: "#EF5350",
      yellow: "#FBBC04",
    },
  },
});

export default theme;
