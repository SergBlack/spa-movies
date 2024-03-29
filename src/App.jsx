import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';
import ErrorBoundary from '@components/ErrorBoundary';

import RobotoRegular from '@assets/fonts/Roboto-Regular.woff2';

export const theme = {
  mainColors: {
    gray: '#555',
    darkGray: '#424242',
    light: '#FFF',
    dark: '#232323',
    red: '#F65261',
  },
  textColorsDependBgColor: {
    gray: '#F65261',
    darkGray: '#FFF',
    red: '#FFF',
    light: '#232323',
    dark: '#FFF',
  },
  shadesMainColors: {
    gray: '#6A6A6A',
    red: '#FF3E50',
    dark: '#555',
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
    width: 70%;
    justify-content: flex-start;
    align-items: center;
  }
`;

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path={['/', '/search', '/film/:id']}>
          <HomePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
