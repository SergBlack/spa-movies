import axios from 'axios';
import logger from '@helpers/logger';
import {
  MOVIES_LOADING,
  MOVIES_LOADED,
  SELECTED_MOVIE_LOADING,
  SELECTED_MOVIE_LOADED,
  LOAD_MOVIES,
  LOAD_SELECTED_MOVIE,
} from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000/';

const headers = {
  'Content-Type': 'application/json',
};

export const moviesLoadingAC = () => ({ type: MOVIES_LOADING });
export const moviesLoadedAC = () => ({ type: MOVIES_LOADED });
export const loadMoviesAC = (data) => ({ type: LOAD_MOVIES, payload: data });
export const selectedMovieLoadingAC = () => ({ type: SELECTED_MOVIE_LOADING });
export const selectedMovieLoadedAC = () => ({ type: SELECTED_MOVIE_LOADED });
export const loadSelectedMovieAC = (data) => ({ type: LOAD_SELECTED_MOVIE, payload: data });

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
