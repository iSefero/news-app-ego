// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

// Common
import App from './App';
import { store } from './redux/store';
import "./i18n/i18n"
import {CssBaseline, ThemeProvider} from "@mui/material";
import { theme } from './styles/theme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline/>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
