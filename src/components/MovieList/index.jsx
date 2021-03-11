import React from 'react';
import {
  arrayOf,
  shape,
  number,
  string,
} from 'prop-types';
import styled from 'styled-components';

import MovieCard from '../MovieCard';

const StyledMovieList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 32px;
`;

const MovieList = ({ movies }) => (
  <StyledMovieList>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </StyledMovieList>
);

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
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
