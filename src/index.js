import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'

import App from './App';
import GlobalStyle from './theme/globalStyles'
import Theme from './theme/theme'


ReactDOM.render(
  <ThemeProvider theme = {Theme}>
    <GlobalStyle />  
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
