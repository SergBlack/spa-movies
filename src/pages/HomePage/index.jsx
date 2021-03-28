import React, { useContext, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import useModal from '@hooks/useModal';

import Header from '@components/Header';
import MovieInfo from '@components/MovieInfo';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Modal from '@components/Modal';
import MovieForm from '@forms/MovieForm';

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
  const { isOpen, toggle } = useModal();
  const { mainColors } = useContext(ThemeContext);
  const movieInfoRef = useRef();

  return (
    <>
      <HeaderWrapper ref={movieInfoRef}>
        <Switch>
          <Route exact path={['/', '/movies']}>
            <Header onClick={toggle} />
          </Route>
          <Route path="/movies/:id">
            <MovieInfo />
          </Route>
        </Switch>
      </HeaderWrapper>
      <Main movieInfoRef={movieInfoRef} />
      <Footer />
      <Modal isOpen={isOpen} toggle={toggle} color={mainColors.dark}>
        <MovieForm formTitle="add movie" close={toggle} />
      </Modal>
    </>
  );
};

export default HomePage;
