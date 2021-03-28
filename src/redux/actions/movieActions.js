import axios from 'axios';
import logger from '@helpers/logger';
import {
  START_MOVIES_LOADING,
  END_MOVIES_LOADING,
  START_SELECTED_MOVIE_LOADING,
  END_SELECTED_MOVIE_LOADING,
  LOADED_MOVIES,
  LOADED_SELECTED_MOVIE,
  SET_SORT_PARAMS,
  SET_CURRENT_SORT,
  SET_FILTER_PARAMS,
  SET_CURRENT_FILTER,
} from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000';

const headers = {
  'Content-Type': 'application/json',
};

const startMoviesLoadingAC = () => ({ type: START_MOVIES_LOADING });
const endMoviesLoadingAC = () => ({ type: END_MOVIES_LOADING });
const loadedMoviesAC = (data) => ({ type: LOADED_MOVIES, payload: data });
const startSelectedMovieLoadingAC = () => ({ type: START_SELECTED_MOVIE_LOADING });
const endSelectedMovieLoadedAC = () => ({ type: END_SELECTED_MOVIE_LOADING });
const loadedSelectedMovieAC = (data) => ({ type: LOADED_SELECTED_MOVIE, payload: data });

export const loadMovies = (params) => async (dispatch) => {
  dispatch(startMoviesLoadingAC());

  try {
    const response = await axios.get(`${API_URL}/movies${params || ''}`, { headers });
    dispatch(loadedMoviesAC(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endMoviesLoadingAC());
  }
};

export const loadSelectedMovie = (id) => async (dispatch) => {
  dispatch(startSelectedMovieLoadingAC());

  try {
    const response = await axios.get(`${API_URL}/movies/${id}`, { headers });
    dispatch(loadedSelectedMovieAC(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endSelectedMovieLoadedAC());
  }
};

export const addMovie = (movie, afterSuccess) => async (dispatch) => {
  dispatch(startSelectedMovieLoadingAC());

  try {
    const response = await axios.post(`${API_URL}/movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endSelectedMovieLoadedAC());
  }
};

export const updateMovie = (movie, afterSuccess) => async (dispatch) => {
  dispatch(startSelectedMovieLoadingAC());

  try {
    const response = await axios.put(`${API_URL}/movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endSelectedMovieLoadedAC());
  }
};

export const deleteMovie = (id, afterSuccess) => async (dispatch) => {
  dispatch(startMoviesLoadingAC());

  try {
    await axios.delete(`${API_URL}/movies/${id}`, { headers });
    afterSuccess();
  } catch (e) {
    logger(e);
  } finally {
    dispatch(endMoviesLoadingAC());
  }
};

export const setCurrentSort = (sort) => ({ type: SET_CURRENT_SORT, payload: sort });
export const setSortParams = (params) => ({ type: SET_SORT_PARAMS, payload: params });
export const setCurrentFilter = (filter) => ({ type: SET_CURRENT_FILTER, payload: filter });
export const setFilterParams = (params) => ({ type: SET_FILTER_PARAMS, payload: params });
