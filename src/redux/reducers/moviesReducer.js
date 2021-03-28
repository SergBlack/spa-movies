import {
  LOADED_MOVIES,
  LOADED_SELECTED_MOVIE,
  SET_CURRENT_SORT,
  SET_SORT_PARAMS,
  SET_CURRENT_FILTER,
  SET_FILTER_PARAMS,
} from '../types';

const initialState = {
  data: [],
  totalAmount: 0,
  limit: 10,
  offset: 0,
  selectedMovie: {},
  sort: {
    current: '',
    params: {},
  },
  filter: {
    current: 'All',
    params: {},
  },
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_MOVIES: {
      return { ...state, ...action.payload };
    }

    case LOADED_SELECTED_MOVIE: {
      return { ...state, selectedMovie: action.payload };
    }

    case SET_CURRENT_SORT: {
      return {
        ...state,
        sort: { ...state.sort, current: action.payload },
      };
    }

    case SET_SORT_PARAMS: {
      return {
        ...state,
        sort: { ...state.sort, params: action.payload },
      };
    }

    case SET_CURRENT_FILTER: {
      return {
        ...state,
        filter: { ...state.filter, current: action.payload },
      };
    }

    case SET_FILTER_PARAMS: {
      return {
        ...state,
        filter: { ...state.filter, params: action.payload },
      };
    }

    default: return state;
  }
};

export default moviesReducer;
