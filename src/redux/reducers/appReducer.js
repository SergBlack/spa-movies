import {
  MOVIES_LOADING,
  MOVIES_LOADED,
  SELECTED_MOVIE_LOADING,
  SELECTED_MOVIE_LOADED,
} from '../types';

const initialState = {
  isLoadingMovies: true,
  isLoadingSelectedMovie: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LOADING: {
      return { ...state, isLoadingMovies: true };
    }

    case MOVIES_LOADED: {
      return { ...state, isLoadingMovies: false };
    }

    case SELECTED_MOVIE_LOADING: {
      return { ...state, isLoadingSelectedMovie: true };
    }

    case SELECTED_MOVIE_LOADED: {
      return { ...state, isLoadingSelectedMovie: false };
    }

    default: return state;
  }
};

export default appReducer;
