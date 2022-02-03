import React from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme'
import Home from './templates/Home/index';
import { GlobalStyles } from './styles/global-styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
