import createTheme from '@mui/material/styles/createTheme';

import PlayfairExtraBold from "../assets/fonts/PlayfairDisplay-ExtraBold.ttf";
import PlayfairMedium from "../assets/fonts/PlayfairDisplay-Medium.ttf";
import PlayfairRegular from "../assets/fonts/PlayfairDisplay-Regular.ttf"


export const theme = createTheme({
  typography: {
    fontFamily: [
      'Playfair',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'Playfair',
            fontStyle: 'normal',
            fontWeight: 800,
            src: `url(${PlayfairExtraBold}) format('truetype')`,
          },
          {
            fontFamily: 'Playfair',
            fontStyle: 'normal',
            fontWeight: 500,
            src: `url(${PlayfairMedium}) format('truetype')`,
          },
          {
            fontFamily: 'Playfair',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url(${PlayfairRegular}) format('truetype')`,
          },
        ],
      },
    },
  },
});
