import React, { useContext, useState } from 'react';
import {
  arrayOf,
  func,
  number,
  shape,
  string,
} from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import useModal from '@hooks/useModal';
import { loadMovies, updateMovie } from '@redux/actions/movieActions';

import Modal from '@components/Modal';
import MovieForm from '@forms/MovieForm';
import DeleteMovieForm from '@forms/DeleteMovieForm';
import MediaContent from '@components/MovieCard/components/MediaContent';
import TextContent from '@components/MovieCard/components/TextContent';

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 32px 16px;
  width: calc(1/5 * 100% - 32px);
  transition-duration: 300ms;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  
  :hover {
    cursor: pointer;
    transition-duration: 300ms;
    transform: scale(1.01);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
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

const MovieCard = ({ movie, onClick }) => {
  const [isShowCardDetails, setShowCardDetails] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen, toggle } = useModal();
  const { mainColors } = useContext(ThemeContext);

  const onOpenDetailsClick = (e) => {
    e.stopPropagation();
    setShowCardDetails(true);
  };

  const onCloseDetailsClick = (e) => {
    e.stopPropagation();
    setShowCardDetails(false);
  };

  const onMovieCardClick = () => {
    onClick(movie.id);
  };

  const onMouseEnterCard = () => {
    setIsHover(true);
  };

  const onMouseLeaveCard = () => {
    setIsHover(false);
    setShowCardDetails(false);
  };

  const onOpenModalClick = (e, modal) => {
    e.stopPropagation();
    setCurrentModal(modal);
    toggle();
  };

  const setMovieAfterSave = (id) => {
    toggle();
    history.push(`/film/${id}`);
    dispatch(loadMovies());
  };

  const onCloseModalClick = (e) => {
    e.stopPropagation();
    setCurrentModal(null);
    toggle();
  };

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    if (movie?.id) {
      dispatch(updateMovie(values, (id) => setMovieAfterSave(id), (status) => setStatus(status)));
    }
    setSubmitting(false);
  };

  return (
    <StyledMovieCard
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
      onClick={onMovieCardClick}
    >
      <MediaContent
        posterPath={movie.poster_path}
        isHover={isHover}
        isShowCardDetails={isShowCardDetails}
        onOpenDetailsClick={onOpenDetailsClick}
        onCloseDetailsClick={onCloseDetailsClick}
        onClick={onOpenModalClick}
      />
      <TextContent
        title={movie.title}
        releaseDate={movie.release_date}
        genres={movie.genres.join(', ')}
      />
      <Modal isOpen={isOpen} toggle={onCloseModalClick} color={mainColors.dark}>
        {currentModal === 'edit' && (
          <MovieForm formTitle="edit movie" movie={movie} onSubmit={onSubmit} />
        )}
        {currentModal === 'delete' && (
          <DeleteMovieForm formTitle="delete movie" id={movie.id} close={toggle} />
        )}
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
  onClick: func.isRequired,
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
