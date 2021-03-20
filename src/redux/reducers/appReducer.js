import { END_LOADING, START_LOADING } from '../types';

const initialState = {
  loading: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, loading: true };
    }

    case END_LOADING: {
      return { ...state, loading: false };
    }

    default: return state;
  }
};

export default appReducer;
