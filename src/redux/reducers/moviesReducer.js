import {
  FETCH_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from '../types';

const initialState = {
  data: [],
  totalAmount: 0,
  limit: 10,
  offset: 0,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      return { ...state, ...action.payload };
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
