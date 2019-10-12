import React from 'react';
import ReactDOM from 'react-dom';
import AppContext from './utils/AppContext';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-titillium-web';
import './global.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283048'
    },
    secondary: {
      main: '#859398'
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white'
      },
      text: {
        color: 'white'
      }
    },
    MuiTypography: {
      colorInherit: {
        color: 'white'
      }
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: `Titillium Web, sans-serif`
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppContext />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
