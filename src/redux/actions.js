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
  SET_EDITED_MOVIE_TO_FORM,
  RESET_FORM,
  HANDLE_INPUT,
  HANDLE_SELECT,
} from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000/';

const headers = {
  'Content-Type': 'application/json',
};

// TODO разбить экшены на файлы
const moviesLoadingAC = () => ({ type: START_MOVIES_LOADING });
const moviesLoadedAC = () => ({ type: END_MOVIES_LOADING });
const loadedMoviesAC = (data) => ({ type: LOADED_MOVIES, payload: data });
const selectedMovieLoadingAC = () => ({ type: START_SELECTED_MOVIE_LOADING });
const selectedMovieLoadedAC = () => ({ type: END_SELECTED_MOVIE_LOADING });
const loadedSelectedMovieAC = (data) => ({ type: LOADED_SELECTED_MOVIE, payload: data });

export const loadMovies = (params) => async (dispatch) => {
  dispatch(moviesLoadingAC());

  try {
    const response = await axios.get(`${API_URL}movies${params}`, { headers });
    dispatch(loadedMoviesAC(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(moviesLoadedAC());
  }
};

export const loadSelectedMovie = (id) => async (dispatch) => {
  dispatch(selectedMovieLoadingAC());

  try {
    const response = await axios.get(`${API_URL}movies/${id}`, { headers });
    dispatch(loadedSelectedMovieAC(response.data));
  } catch (e) {
    logger(e);
  } finally {
    dispatch(selectedMovieLoadedAC());
  }
};

export const addMovie = (movie, afterSuccess) => async (dispatch) => {
  dispatch(selectedMovieLoadingAC());

  try {
    const response = await axios.post(`${API_URL}movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
  } finally {
    dispatch(selectedMovieLoadedAC());
  }
};

export const updateMovie = (movie, afterSuccess) => async (dispatch) => {
  dispatch(selectedMovieLoadingAC());

  try {
    const response = await axios.put(`${API_URL}movies`, movie, { headers });
    afterSuccess(response.data.id);
  } catch (e) {
    logger(e);
  } finally {
    dispatch(selectedMovieLoadedAC());
  }
};

export const deleteMovie = (id, afterSuccess) => async () => {
  try {
    await axios.delete(`${API_URL}movies/${id}`, { headers });
    afterSuccess();
  } catch (e) {
    logger(e);
  }
};

export const setEditedMovieToForm = (data) => ({ type: SET_EDITED_MOVIE_TO_FORM, payload: data });
export const resetForm = () => ({ type: RESET_FORM });
export const handleFormInput = (key, value) => ({ type: HANDLE_INPUT, payload: { [key]: value } });
export const handleFormSelect = (data) => ({ type: HANDLE_SELECT, payload: data });

export const setCurrentSort = (sort) => ({ type: SET_CURRENT_SORT, payload: sort });
export const setSortParams = (params) => ({ type: SET_SORT_PARAMS, payload: params });
export const setCurrentFilter = (filter) => ({ type: SET_CURRENT_FILTER, payload: filter });
export const setFilterParams = (params) => ({ type: SET_FILTER_PARAMS, payload: params });
