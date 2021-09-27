import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import DataProvider from './components/context/dataContext/DataContext';

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
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

