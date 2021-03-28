import {
  START_MOVIES_LOADING,
  END_MOVIES_LOADING,
  START_SELECTED_MOVIE_LOADING,
  END_SELECTED_MOVIE_LOADING,
} from '../types';

const initialState = {
  isLoadingMovies: true,
  isLoadingSelectedMovie: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_MOVIES_LOADING: {
      return { ...state, isLoadingMovies: true };
    }

    case END_MOVIES_LOADING: {
      return { ...state, isLoadingMovies: false };
    }

    case START_SELECTED_MOVIE_LOADING: {
      return { ...state, isLoadingSelectedMovie: true };
    }

    case END_SELECTED_MOVIE_LOADING: {
      return { ...state, isLoadingSelectedMovie: false };
    }

    default: return state;
  }
};

export default appReducer;
