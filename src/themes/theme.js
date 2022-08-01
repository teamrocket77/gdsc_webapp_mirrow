import { createTheme } from '@mui/material/styles';
import { blue, grey, red } from '@mui/material/colors';

const theme = createTheme({
    palette: { 
        primary: {
            main: '#FFFFFF',
            alternate: grey[700],
        },
        secondary: {
            main: blue[500],
        },
        hashtags: {
            main: '#FF69B4',
        },
        red: {
            main: `#FF0000`,   
        },
        blue: {
            main: "#0000FF",
        },
        yellow: {
            main: "#FFBC00",
        },
    },
    socials_btn_red: {
        backgroundColor: "white",
        borderColor: "red",
        "&:hover": {
            backgroundColor: '#FF0000',
            color: "white",
            borderColor: "black",
        }
      },
});

export default theme;