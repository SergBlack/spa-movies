import axios from 'axios';
import logger from '@helpers/logger';
import {
  MOVIES_LOADING,
  MOVIES_LOADED,
  SELECTED_MOVIE_LOADING,
  SELECTED_MOVIE_LOADED,
  LOAD_MOVIES,
  LOAD_SELECTED_MOVIE,
  SET_EDITED_MOVIE_TO_FORM,
  RESET_FORM,
  HANDLE_INPUT,
  HANDLE_SELECT,
} from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000/';

const headers = {
  'Content-Type': 'application/json',
};

const moviesLoadingAC = () => ({ type: MOVIES_LOADING });
const moviesLoadedAC = () => ({ type: MOVIES_LOADED });
const loadMoviesAC = (data) => ({ type: LOAD_MOVIES, payload: data });
const selectedMovieLoadingAC = () => ({ type: SELECTED_MOVIE_LOADING });
const selectedMovieLoadedAC = () => ({ type: SELECTED_MOVIE_LOADED });
const loadSelectedMovieAC = (data) => ({ type: LOAD_SELECTED_MOVIE, payload: data });

export const loadMovies = () => async (dispatch) => {
  dispatch(moviesLoadingAC());

  try {
    const response = await axios.get(`${API_URL}movies`, { headers });
    dispatch(loadMoviesAC(response.data));
    dispatch(moviesLoadedAC());
  } catch (e) {
    logger(e);
    dispatch(moviesLoadedAC());
  }
};

export const loadSelectedMovie = (id) => async (dispatch) => {
  dispatch(selectedMovieLoadingAC());

  try {
    const response = await axios.get(`${API_URL}movies/${id}`, { headers });
    dispatch(loadSelectedMovieAC(response.data));
    dispatch(selectedMovieLoadedAC());
  } catch (e) {
    logger(e);
    dispatch(selectedMovieLoadedAC());
  }
};

export const addMovie = () => async (dispatch) => {
  dispatch(selectedMovieLoadingAC());

  try {
    // add
  } catch (e) {
    logger(e);
    dispatch(selectedMovieLoadedAC());
  }
};

export const setEditedMovieToForm = (data) => ({ type: SET_EDITED_MOVIE_TO_FORM, payload: data });
export const resetForm = () => ({ type: RESET_FORM });
export const handleFormInput = (key, value) => ({ type: HANDLE_INPUT, payload: { [key]: value } });
export const handleFormSelect = (data) => ({ type: HANDLE_SELECT, payload: data });
