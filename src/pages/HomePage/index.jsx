import React, {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import styled, { ThemeContext } from 'styled-components';

import Header from '@components/Header';
import MovieInfo from '@components/MovieInfo';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Modal from '@components/Modal';
import MovieForm from '@forms/MovieForm';

import useModal from '@hooks/useModal';

import BackgroundImage from '@assets/images/header-background.jpg';

// TODO: replace with real data
import movies from './movies.json';

// TODO: replace with real data
const filtersList = ['ALL', 'ACTION', 'ADVENTURE', 'DRAMA', 'MYSTERY', 'THRILLER'];
const sortList = ['RELEASE DATE', 'TITLE'];

const HeaderWrapper = styled.header`
  height: 450px;
  width: 100%;
  margin: 40px 0 20px 0;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [isShowMovieInfo, setIsShowMovieInfo] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isOpen, toggle } = useModal();
  const { mainColors } = useContext(ThemeContext);
  const movieInfo = useRef();

  useEffect(() => {
    setMovie(movies);
  }, []);

  const onCardClick = (id) => {
    movieInfo.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    setIsShowMovieInfo(true);
    setSelectedMovie(...movies.filter((movieItem) => movieItem.id === id));
  };

  const onCloseMovieInfo = () => {
    setIsShowMovieInfo(false);
  };

  return (
    <>
      <HeaderWrapper ref={movieInfo}>
        {isShowMovieInfo
          ? <MovieInfo selected={selectedMovie} onClick={onCloseMovieInfo} />
          : <Header onClick={toggle} />}
      </HeaderWrapper>
      <Main
        data={movie}
        filtersList={filtersList}
        sortList={sortList}
        onCardClick={onCardClick}
      />
      <Footer />
      <Modal isOpen={isOpen} toggle={toggle} color={mainColors.dark}>
        <MovieForm formTitle="add movie" />
      </Modal>
    </>
  );
};

export default HomePage;
