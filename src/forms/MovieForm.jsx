import React, { useState, useEffect } from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

import INITIAL_STATE from '../constants/initialState';
import GENRES from '../constants/genres';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;
`;

const MovieForm = ({ formTitle, movie }) => {
  const [editedMovie, setEditedMovie] = useState(INITIAL_STATE);

  useEffect(() => {
    if (movie) {
      setEditedMovie(movie);
    }
  }, [movie]);

  // TODO: replace with redux action
  const handleSave = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-alert
    alert(`You are submitting: ${JSON.stringify(editedMovie)}`);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setEditedMovie(INITIAL_STATE);
  };

  const handleInput = (e) => {
    setEditedMovie({ ...editedMovie, [e.target.name]: e.target.value });
  };

  const handleSelect = (newGenre) => {
    if (editedMovie.genres.includes(newGenre)) {
      const filteredGenres = editedMovie.genres.filter((genre) => genre !== newGenre);
      setEditedMovie({ ...editedMovie, genres: filteredGenres });
      return;
    }
    setEditedMovie({ ...editedMovie, genres: [...editedMovie.genres, newGenre] });
  };

  return (
    <Form title={formTitle}>
      <Input
        value={editedMovie.title}
        onChange={handleInput}
        name="title"
        label="title"
        placeholder="Enter movie title"
        color="darkGray"
      />

      <Input
        value={editedMovie.release_date}
        onChange={handleInput}
        name="release_date"
        type="date"
        label="release date"
        color="darkGray"
      />

      <Input
        value={editedMovie.poster_path}
        onChange={handleInput}
        name="poster_path"
        label="movie URL"
        placeholder="Enter movie URL"
        color="darkGray"
      />

      <Select
        value={editedMovie.genres.join(', ')}
        placeholder="Select genre"
        onChange={handleSelect}
        label="genre"
        optionList={GENRES}
        selectedList={editedMovie.genres}
        height="60px"
      />

      <Input
        value={editedMovie.overview}
        onChange={handleInput}
        name="overview"
        label="overview"
        placeholder="Overview text goes here"
        color="darkGray"
      />

      <Input
        value={editedMovie.runtime}
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
