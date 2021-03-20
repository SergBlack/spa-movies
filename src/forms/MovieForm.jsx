import React, { useEffect, useCallback } from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectEditedMovie } from '@/redux/selectors';
import {
  setEditedMovieToForm,
  resetForm,
  handleFormInput,
  handleFormSelect,
} from '@/redux/actions';
import GENRES from '@constants/genres';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;
`;

const MovieForm = ({ formTitle, movie }) => {
  const selectedEditedMovie = useSelector(selectEditedMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) {
      dispatch(setEditedMovieToForm(movie));
    }
  }, [dispatch, movie]);

  // TODO: replace with redux action
  const handleSave = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-alert
    alert(`You are submitting: ${JSON.stringify(selectedEditedMovie)}`);
  };

  const handleReset = useCallback(
    () => { dispatch(resetForm()); },
    [dispatch],
  );

  const handleInput = useCallback(
    (e) => { dispatch(handleFormInput(e.target.name, e.target.value)); },
    [dispatch],
  );

  const handleSelect = useCallback(
    (newGenre) => { dispatch(handleFormSelect(newGenre)); },
    [dispatch],
  );

  return (
    <Form title={formTitle}>
      <Input
        value={selectedEditedMovie.title}
        onChange={handleInput}
        name="title"
        label="title"
        placeholder="Enter movie title"
        color="darkGray"
      />

      <Input
        value={selectedEditedMovie.release_date}
        onChange={handleInput}
        name="release_date"
        type="date"
        label="release date"
        color="darkGray"
      />

      <Input
        value={selectedEditedMovie.poster_path}
        onChange={handleInput}
        name="poster_path"
        label="movie URL"
        placeholder="Enter movie URL"
        color="darkGray"
      />

      <Select
        value={selectedEditedMovie.genres.join(', ')}
        placeholder="Select genre"
        onChange={handleSelect}
        label="genre"
        optionList={GENRES}
        selectedList={selectedEditedMovie.genres}
        height="60px"
      />

      <Input
        value={selectedEditedMovie.overview}
        onChange={handleInput}
        name="overview"
        label="overview"
        placeholder="Overview text goes here"
        color="darkGray"
      />

      <Input
        value={selectedEditedMovie.runtime}
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
