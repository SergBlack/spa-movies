import {
  LOADED_MOVIES,
  LOADED_SELECTED_MOVIE,
} from '../types';

export const initialState = {
  data: [],
  totalAmount: 0,
  limit: 10,
  offset: 0,
  selectedMovie: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_MOVIES: {
      return { ...state, ...action.payload };
    }

    case LOADED_SELECTED_MOVIE: {
      return { ...state, selectedMovie: action.payload };
    }

    default: return state;
  }
};

export default moviesReducer;
