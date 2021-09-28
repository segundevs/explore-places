import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';


const theme = {
  colors: {
    bg: '#ffffff',
    color: '#424042',
    accent: 'hsl(253,77%,53%)'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

