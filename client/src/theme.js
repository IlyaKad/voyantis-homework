import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D3557', // Voyantis primary color
    },
    background: {
      default: '#F1FAEE', // Background color
      paper: '#A8DADC', // Paper color
    },
    text: {
      primary: '#1D3557', // Text color
      secondary: '#457B9D', // Secondary text
    },
  },
});

export default theme;
