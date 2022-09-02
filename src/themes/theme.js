import { createTheme } from '@mui/material/styles';
import { blue, grey, red, yellow } from '@mui/material/colors';

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
        light_red: {
            main: red[700],
        },
        blue: {
            main: blue[400],
        },
        yellow: {
            main: "#FFBC00",
        },
        dark_blue: {
            main: blue[300],
        },
        darkest_blue: {
            main: blue[900],
        },
        black: {
            main: "#000000",
        }
        
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