import {
  RESET_FORM,
  HANDLE_INPUT,
  HANDLE_SELECT,
  SET_EDITED_MOVIE_TO_FORM,
} from '../types';

const initialState = {
  title: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  genres: [],
  runtime: 0,
};

const movieFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FORM: {
      return initialState;
    }

    case HANDLE_INPUT: {
      return { ...state, ...action.payload };
    }

    case HANDLE_SELECT: {
      const newGenre = action.payload;
      if (state.genres.includes(newGenre)) {
        const filteredGenres = state.genres.filter((genre) => genre !== newGenre);
        return { ...state, genres: filteredGenres };
      }
      return { ...state, genres: [...state.genres, newGenre] };
    }

    case SET_EDITED_MOVIE_TO_FORM: {
      return { ...action.payload };
    }

    default:
      return state;
  }
};

export default movieFormReducer;
