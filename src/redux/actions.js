import axios from 'axios';
import logger from '@helpers/logger';
import { START_LOADING, END_LOADING, FETCH_MOVIES } from '@/redux/types';

const API_URL = 'http://127.0.0.1:4000/';

const headers = {
  'Content-Type': 'application/json',
};

const startLoadingActionCreator = () => ({
  type: START_LOADING,
});

const endLoadingActionCreator = () => ({
  type: END_LOADING,
});

export const fetchMoviesActionCreator = (data) => ({
  type: FETCH_MOVIES,
  payload: data,
});

export const fetchMovies = () => async (dispatch) => {
  dispatch(startLoadingActionCreator());

  try {
    const response = await axios.get(`${API_URL}movies`, { headers });
    dispatch(fetchMoviesActionCreator(response.data));
    dispatch(endLoadingActionCreator());
  } catch (e) {
    logger(e);
    dispatch(endLoadingActionCreator());
  }
};

export const addMovie = () => async (dispatch) => {
  dispatch(startLoadingActionCreator());

  try {
    // add
  } catch (e) {
    logger(e);
    dispatch(endLoadingActionCreator());
  }
};
