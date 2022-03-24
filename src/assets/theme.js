import { createTheme } from '@mui/material/styles';
export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4b0279',
      dark: '#500243',
      light: '#65015b',
      mainGradient: 'linear-gradient( red, blue)',
    },
    secondary: {
      main: '#B79BC0',
    },
    text: {
      primary: '#07000c',
      secondary: '#3c373d',
    },
    background: {
      default: '#9c95dc',
      secondary: '#959CE5',
    },
  },
});