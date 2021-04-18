import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
  func,
} from 'prop-types';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import GENRES_LIST from '@constants/genres';

import FormLayout from '@components/FormLayout';
import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';

import isValidUrl from '@helpers/urlValidator';

const ButtonWrapper = styled.div`
  display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;
`;

const initialValues = {
  title: '',
  tagline: '',
  release_date: '',
  poster_path: '',
  overview: '',
  genres: [],
  runtime: '',
};

const MovieForm = ({ formTitle, movie, onSubmit }) => {
  const formValidate = (values) => {
    const errors = {};
    const ERROR_MESSAGE = 'Required';
    const stringValues = Object.keys(initialValues);

    stringValues.forEach((item) => {
      if (!values[item] || (Array.isArray(values[item]) && !values[item].length)) {
        errors[item] = ERROR_MESSAGE;
      }
      if (values.poster_path && !isValidUrl(values.poster_path)) {
        errors.poster_path = 'Url must be valid';
      }
    });

    return errors;
  };

  return (
    <FormLayout title={formTitle}>
      <Formik
        initialValues={movie || initialValues}
        validate={formValidate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, handleReset, status }) => (
          <Form>
            <Input name="title" placeholder="Enter movie title" label="title" />
            <Input
              type="date"
              name="release_date"
              placeholder="Enter release date"
              label="release date"
            />
            <Input name="poster_path" placeholder="Enter movie poster URL" label="poster path" />
            <Input name="overview" placeholder="Overview text goes here" label="overview" />
            <Select
              name="genres"
              placeholder="Select genre"
              label="genres"
              optionList={GENRES_LIST}
              height="60px"
              multiple
            />
            <Input name="tagline" placeholder="Tagline text goes here" label="tagline" />
            <Input
              type="number"
              name="runtime"
              placeholder="Runtime text goes here (must be a number)"
              label="runtime"
            />

            {/* TODO think about how handle error */}
            {!!status?.length && (
              <span style={{ color: 'red' }}>{status.join(', ')}</span>
            )}

            <ButtonWrapper>
              <Button text="reset" onClick={handleReset} color="gray" />
              <Button text="save" type="submit" disabled={isSubmitting} />
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </FormLayout>
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
  onSubmit: func,
};

MovieForm.defaultProps = {
  formTitle: '',
  movie: null,
  onSubmit: () => {},
};

export default MovieForm;
