import React from 'react';
import { string, number, func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { deleteMovie, loadMovies } from '@/redux/actions/movieActions';

import FormLayout from '../components/FormLayout';
import Button from '../components/Button';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: flex-end;
    margin: 80px 0 40px 0;
`;

const DeleteMovieForm = ({ formTitle, id, close }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const resetForm = () => {
    close();
    history.push('/');
    dispatch(loadMovies());
  };

  const handleSubmit = () => {
    dispatch(deleteMovie(id, resetForm));
  };

  return (
    <FormLayout title={formTitle}>
      <h2>Are you sure to delete this movie?</h2>
      <ButtonWrapper>
        <Button text="confirm" onClick={handleSubmit} />
      </ButtonWrapper>
    </FormLayout>
  );
};

DeleteMovieForm.propTypes = {
  formTitle: string,
  id: number.isRequired,
  close: func.isRequired,
};

DeleteMovieForm.defaultProps = {
  formTitle: '',
};

export default DeleteMovieForm;
