import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@components/Header';
import MovieInfo from '@components/MovieInfo';
import Main from '@components/Main';
import Footer from '@components/Footer';

import BackgroundImage from '@assets/images/header-background.jpg';

const HeaderWrapper = styled.header`
  height: 450px;
  width: 100%;
  margin: 40px 0 20px 0;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HomePage = () => {
  const movieInfoRef = useRef();

  return (
    <>
      <HeaderWrapper ref={movieInfoRef}>
        <Switch>
          <Route path="/film/:id">
            <MovieInfo />
          </Route>
          <Route path={['/', '/search']}>
            <Header />
          </Route>
        </Switch>
      </HeaderWrapper>
      <Main movieInfoRef={movieInfoRef} />
      <Footer />
    </>
  );
};

export default HomePage;
