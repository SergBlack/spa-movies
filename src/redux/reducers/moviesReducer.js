import {
  LOAD_MOVIES,
  LOAD_SELECTED_MOVIE,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from '../types';

const initialState = {
  data: [],
  totalAmount: 0,
  limit: 10,
  offset: 0,
  selectedMovie: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, ...action.payload };
    }

    case LOAD_SELECTED_MOVIE: {
      return { ...state, selectedMovie: action.payload };
    }

    case ADD_MOVIE: {
      return state;
    }

    case UPDATE_MOVIE: {
      return state;
    }

    case DELETE_MOVIE: {
      return state;
    }

    default: return state;
  }
};

export default moviesReducer;
