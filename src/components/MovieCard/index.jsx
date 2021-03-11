import React, { useContext, useState } from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import MediaContent from './components/MediaContent';
import DescContent from './components/DescContent';
import Modal from '../Modal';
import EditMovieForm from '../../forms/EditMovieForm';
import DeleteMovieForm from '../../forms/DeleteMovieForm';

import useModal from '../../hooks/useModal';

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
  width: calc(1/5 * 100% - 32px);
  transition-duration: 300ms;
  
  :hover {
    cursor: pointer;
    transition-duration: 300ms;
    transform: scale(1.01);
  }
  
  @media screen and (max-width: 1920px) {
    width: calc(1/4 * 100% - 32px);
  }

  @media screen and (max-width: 1440px) {
    width: calc(1/3 * 100% - 32px);
  }

  @media screen and (max-width: 1200px) {
    width: calc(1/2 * 100% - 32px);
  }

  @media screen and (max-width: 800px) {
    width: calc(100% - 32px);
  }
`;

const MovieCard = ({ movie }) => {
  const [isShowCardDetails, setShowCardDetails] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const { isOpen, open, close } = useModal();
  const { mainColors } = useContext(ThemeContext);

  const onOpenDetailsClick = () => {
    setShowCardDetails(true);
  };

  const onCloseDetailsClick = () => {
    setShowCardDetails(false);
  };

  const onMouseEnterCard = () => {
    setIsHover(true);
  };

  const onMouseLeaveCard = () => {
    setIsHover(false);
    setShowCardDetails(false);
  };

  const onOpenModalClick = (modal) => {
    setCurrentModal(modal);
    open();
  };

  const onCloseModalClick = () => {
    setCurrentModal(null);
    close();
  };

  return (
    <StyledMovieCard
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
    >
      <MediaContent
        posterPath={movie.poster_path}
        isHover={isHover}
        isShowCardDetails={isShowCardDetails}
        onOpenDetailsClick={onOpenDetailsClick}
        onCloseDetailsClick={onCloseDetailsClick}
        onClick={onOpenModalClick}
      />
      <DescContent
        title={movie.title}
        releaseDate={movie.release_date}
        genres={movie.genres.join(', ')}
      />
      <Modal isOpen={isOpen} close={onCloseModalClick} color={mainColors.dark}>
        {currentModal === 'edit' && <EditMovieForm formTitle="edit movie" movie={movie} />}
        {currentModal === 'delete' && <DeleteMovieForm formTitle="delete movie" />}
      </Modal>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  movie: shape({
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: arrayOf(string),
    runtime: number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
