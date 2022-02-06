import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const themeMode = 'dark'; // dark or light
const primaryColor = '#00e59b';
const secondaryColor = '#f50057';
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: themeMode,
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#14181e',
      default: '#121212',
    },
  },
});

export default theme;
