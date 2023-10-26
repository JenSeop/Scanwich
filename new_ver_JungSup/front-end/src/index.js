import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    1: {
      main: '#2AF57B',
    },
    2: {
      main: '#28E070',
    },
    3: {
      main: '#373531',
      
    },
    4: {
      main: '#FFF5DC',
    },
    "social": {
      main: '#8B4513',
    },
    "card": {
      main: '373531',
    }
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

reportWebVitals();
