import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import RobotoRegular from './assets/fonts/Roboto-Regular.woff2';
import ErrorBoundary from './components/ErrorBoundary';

const theme = {
  mainColors: {
    gray: '#555',
    darkGray: '#424242',
    light: '#FFF',
    dark: '#232323',
    red: '#F65261',
  },
  secondaryColors: {
    red: '#FF3E50',
    gray: '#6A6A6A',
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular}) format('woff2');
  }
  body {
    background-color: ${theme.mainColors.gray};
    color: ${theme.mainColors.light};
    font-family: ${'Roboto-Regular'};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: flex-start;
    align-items: center;
  }
`;

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
