import React from 'react';
import {
  arrayOf,
  shape,
  number,
  string,
} from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import NotFoundPage from '@pages/NotFoundPage';
import MovieCard from '@components/MovieCard';

const StyledMovieList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 32px;
`;

const MovieList = ({ movies, movieInfoRef }) => {
  const history = useHistory();

  const onCardClick = (id) => {
    movieInfoRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    history.push(`/movies/${id}`);
  };

  return (
    <StyledMovieList>
      {movies.length
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} onClick={onCardClick} />)
        : <NotFoundPage />}
    </StyledMovieList>
  );
};

MovieList.propTypes = {
  movies: arrayOf(
    shape({
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
  ),
  movieInfoRef: shape({}).isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
