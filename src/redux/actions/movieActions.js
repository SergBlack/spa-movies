import axios from 'axios';
import logger from '@helpers/logger';
import {
  START_MOVIES_LOADING,
  END_MOVIES_LOADING,
  START_SELECTED_MOVIE_LOADING,
  END_SELECTED_MOVIE_LOADING,
  LOADED_MOVIES,
  LOADED_SELECTED_MOVIE,
} from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000';

const headers = {
  'Content-Type': 'application/json',
};

const startMoviesLoading = () => ({ type: START_MOVIES_LOADING });
const endMoviesLoading = () => ({ type: END_MOVIES_LOADING });
const loadedMovies = (data) => ({ type: LOADED_MOVIES, payload: data });
const startSelectedMovieLoading = () => ({ type: START_SELECTED_MOVIE_LOADING });
const endSelectedMovieLoaded = () => ({ type: END_SELECTED_MOVIE_LOADING });
const loadedSelectedMovie = (data) => ({ type: LOADED_SELECTED_MOVIE, payload: data });

export const loadMovies = (params) => async (dispatch) => {
  dispatch(startMoviesLoading());
  const queryParams = params ? `?${params}` : '';

  try {
    const response = await axios.get(`${API_URL}/movies${queryParams}`, { headers });
    dispatch(loadedMovies(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endMoviesLoading());
  }
};

export const loadSelectedMovie = (id) => async (dispatch) => {
  dispatch(startSelectedMovieLoading());

  try {
    const response = await axios.get(`${API_URL}/movies/${id}`, { headers });
    dispatch(loadedSelectedMovie(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endSelectedMovieLoaded());
  }
};

export const addMovie = (movie, afterSuccess, setStatus) => async (dispatch) => {
  dispatch(startSelectedMovieLoading());

  try {
    const response = await axios.post(`${API_URL}/movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
    setStatus(e.response.data.messages);
  } finally {
    dispatch(endSelectedMovieLoaded());
  }
};

export const updateMovie = (movie, afterSuccess, setStatus) => async (dispatch) => {
  dispatch(startSelectedMovieLoading());

  try {
    const response = await axios.put(`${API_URL}/movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
    setStatus(e.response.data.messages);
  } finally {
    dispatch(endSelectedMovieLoaded());
  }
};

export const deleteMovie = (id, afterSuccess) => async (dispatch) => {
  dispatch(startMoviesLoading());

  try {
    await axios.delete(`${API_URL}/movies/${id}`, { headers });
    afterSuccess();
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endMoviesLoading());
  }
};
