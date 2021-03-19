import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Form from '../components/Form';
import Button from '../components/Button';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: flex-end;
    margin: 80px 0 40px 0;
`;

const DeleteMovieForm = ({ formTitle }) => {
  const handleSubmit = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-alert
    alert('Movie deleted');
  };

  return (
    <Form title={formTitle}>
      <h2>Are you sure to delete this movie?</h2>
      <ButtonWrapper>
        <Button text="confirm" onClick={handleSubmit} />
      </ButtonWrapper>
    </Form>
  );
};

DeleteMovieForm.propTypes = {
  formTitle: string,
};

DeleteMovieForm.defaultProps = {
  formTitle: '',
};

export default DeleteMovieForm;
