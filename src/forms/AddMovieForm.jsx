import React, { useState } from 'react';
import { string } from 'prop-types';
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

// TODO: refactoring MovieForm
const AddMovieForm = ({ formTitle }) => {
  const [newMovie, setNewMovie] = useState(INITIAL_STATE);

  // TODO: replace with redux action
  const handleSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(`You are submitting: ${JSON.stringify(newMovie)}`);
  };

  const handleReset = () => {
    setNewMovie(INITIAL_STATE);
  };

  const handleInput = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSelect = (newGenre) => {
    if (newMovie.genres.includes(newGenre)) {
      const filteredGenres = newMovie.genres.filter((genre) => genre !== newGenre);
      setNewMovie({ ...newMovie, genres: filteredGenres });
      return;
    }
    setNewMovie({ ...newMovie, genres: [...newMovie.genres, newGenre] });
  };

  return (
    <Form title={formTitle}>
      <Input
        value={newMovie.title}
        onChange={handleInput}
        name="title"
        label="title"
        placeholder="Enter movie title"
        color="darkGray"
      />

      <Input
        value={newMovie.release_date}
        onChange={handleInput}
        name="release_date"
        type="date"
        label="release date"
        color="darkGray"
      />

      <Input
        value={newMovie.poster_path}
        onChange={handleInput}
        name="poster_path"
        label="movie URL"
        placeholder="Enter movie URL"
        color="darkGray"
      />

      <Select
        value={newMovie.genres.join(', ')}
        placeholder="Select genre"
        onChange={handleSelect}
        label="genre"
        optionList={GENRES}
        selectedList={newMovie.genres}
        height="60px"
      />

      <Input
        value={newMovie.overview}
        onChange={handleInput}
        name="overview"
        label="overview"
        placeholder="Overview text goes here"
        color="darkGray"
      />

      <Input
        value={newMovie.runtime}
        onChange={handleInput}
        name="runtime"
        label="runtime"
        placeholder="Runtime text goes here"
        color="darkGray"
      />

      <ButtonWrapper>
        <Button text="reset" onClick={handleReset} color="gray" />
        <Button text="submit" onClick={handleSubmit} />
      </ButtonWrapper>
    </Form>
  );
};

AddMovieForm.propTypes = {
  formTitle: string,
};

AddMovieForm.defaultProps = {
  formTitle: '',
};

export default AddMovieForm;
