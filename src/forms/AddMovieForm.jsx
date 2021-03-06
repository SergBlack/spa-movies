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

  // TODO: rework handle genres after refactor Select
  const handleInput = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
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
        value={newMovie.date}
        onChange={handleInput}
        name="date"
        type="date"
        label="release date"
        color="darkGray"
      />

      <Input
        value={newMovie.url}
        onChange={handleInput}
        name="url"
        label="movie URL"
        placeholder="Enter movie URL"
        color="darkGray"
      />

      <Select
        value={newMovie.genre}
        onChange={handleInput}
        name="genre"
        label="genre"
        optionList={GENRES}
        height="60px"
        color="darkGray"
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
