import React, { useEffect, useCallback } from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
  func,
} from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { selectEditedMovie } from '@/redux/selectors';
import { addMovie, updateMovie, loadMovies } from '@/redux/actions/movieActions';
import {
  setEditedMovieToForm,
  resetForm,
  handleFormInput,
  handleFormSelect,
} from '@/redux/actions/formActions';
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

const MovieForm = ({ formTitle, movie, close }) => {
  const selectedEditedMovie = useSelector(selectEditedMovie);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (movie) {
      dispatch(setEditedMovieToForm(movie));
    }
  }, [dispatch, movie]);

  const handleReset = useCallback(
    () => { dispatch(resetForm()); },
    [dispatch],
  );

  const setMovieAfterSave = (id) => {
    handleReset();
    close();
    history.push(`/movies/${id}`);
    dispatch(loadMovies());
  };

  const handleSave = () => {
    if (selectedEditedMovie.id) {
      dispatch(updateMovie(selectedEditedMovie, (id) => setMovieAfterSave(id)));
    } else {
      dispatch(addMovie(selectedEditedMovie, (id) => setMovieAfterSave(id)));
    }
  };

  const handleInput = useCallback(
    (e) => {
      const { type, name, value } = e.target;
      dispatch(handleFormInput(name, type === 'number' ? Number(value) : value));
    },
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
        multiple
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
        value={selectedEditedMovie.tagline}
        onChange={handleInput}
        name="tagline"
        label="tagline"
        placeholder="Tagline text goes here"
        color="darkGray"
      />

      <Input
        value={selectedEditedMovie.runtime}
        onChange={handleInput}
        name="runtime"
        label="runtime"
        placeholder="Runtime text goes here"
        color="darkGray"
        type="number"
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
  close: func,
};

MovieForm.defaultProps = {
  formTitle: '',
  movie: null,
  close: () => {},
};

export default MovieForm;
