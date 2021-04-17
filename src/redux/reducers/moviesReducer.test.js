import {
  LOADED_MOVIES,
  LOADED_SELECTED_MOVIE,
} from '../types';
import moviesReducer, { initialState } from './moviesReducer';

describe('moviesReducer testing', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle loaded movies', () => {
    const movies = {
      data: [{ id: 337167, title: 'Fifty Shades Freed', tagline: "Don't miss the climax" }],
      totalAmount: 1,
      limit: 10,
      offset: 0,
    };
    const expected = {
      data: movies.data,
      totalAmount: 1,
      limit: 10,
      offset: 0,
      selectedMovie: {},
    };

    expect(
      moviesReducer(undefined, { type: LOADED_MOVIES, payload: movies }),
    ).toEqual(expected);
  });

  it('should handle selected loaded movie', () => {
    const movie = { id: 337167, title: 'Fifty Shades Freed', tagline: "Don't miss the climax" };
    const expected = {
      data: [],
      totalAmount: 0,
      limit: 10,
      offset: 0,
      selectedMovie: movie,
    };

    expect(
      moviesReducer(undefined, { type: LOADED_SELECTED_MOVIE, payload: movie }),
    ).toEqual(expected);
  });
});
