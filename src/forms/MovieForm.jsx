import React, { useReducer, useEffect, useCallback } from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';

import GENRES from '@constants/genres';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;
`;

const initialState = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'SET_MOVIE_FROM_PROPS':
      return action.payload;
    case 'HANDLE_INPUT': {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case 'HANDLE_SELECT': {
      const newGenre = action.payload;
      if (state.genres.includes(newGenre)) {
        const filteredGenres = state.genres.filter((genre) => genre !== newGenre);
        return { ...state, genres: filteredGenres };
      }
      return { ...state, genres: [...state.genres, newGenre] };
    }
    default:
      return state;
  }
};

const MovieForm = ({ formTitle, movie }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (movie) {
      dispatch({ type: 'SET_MOVIE_FROM_PROPS', payload: movie });
    }
  }, [movie]);

  // TODO: replace with redux action
  const handleSave = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-alert
    alert(`You are submitting: ${JSON.stringify(state)}`);
  };

  const handleReset = useCallback(
    () => { dispatch({ type: 'RESET' }); },
    [dispatch],
  );

  const handleInput = useCallback(
    (e) => dispatch({ type: 'HANDLE_INPUT', payload: e.target }),
    [dispatch],
  );

  const handleSelect = useCallback(
    (newGenre) => { dispatch({ type: 'HANDLE_SELECT', payload: newGenre }); },
    [dispatch],
  );

  return (
    <Form title={formTitle}>
      <Input
        value={state.title}
        onChange={handleInput}
        name="title"
        label="title"
        placeholder="Enter movie title"
        color="darkGray"
      />

      <Input
        value={state.release_date}
        onChange={handleInput}
        name="release_date"
        type="date"
        label="release date"
        color="darkGray"
      />

      <Input
        value={state.poster_path}
        onChange={handleInput}
        name="poster_path"
        label="movie URL"
        placeholder="Enter movie URL"
        color="darkGray"
      />

      <Select
        value={state.genres.join(', ')}
        placeholder="Select genre"
        onChange={handleSelect}
        label="genre"
        optionList={GENRES}
        selectedList={state.genres}
        height="60px"
      />

      <Input
        value={state.overview}
        onChange={handleInput}
        name="overview"
        label="overview"
        placeholder="Overview text goes here"
        color="darkGray"
      />

      <Input
        value={state.runtime}
        onChange={handleInput}
        name="runtime"
        label="runtime"
        placeholder="Runtime text goes here"
        color="darkGray"
      />

      <ButtonWrapper>
        <Button text="reset" onClick={handleReset} color="gray" />
        <Button text="save" onClick={handleSave} />
      </ButtonWrapper>
    </Form>
  );
};

MovieForm.propTypes = {
  formTitle: string,
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

MovieForm.defaultProps = {
  formTitle: '',
  movie: null,
};

export default MovieForm;
