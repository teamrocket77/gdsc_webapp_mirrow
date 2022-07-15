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
            main: '#FF69B4'
        }
    },
});

export default theme;