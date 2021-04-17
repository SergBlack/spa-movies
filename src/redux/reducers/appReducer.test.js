import {
  START_MOVIES_LOADING,
  END_MOVIES_LOADING,
  START_SELECTED_MOVIE_LOADING,
  END_SELECTED_MOVIE_LOADING,
} from '../types';
import appReducer, { initialState } from './appReducer';

describe('appReducer testing', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle movies loading status', () => {
    expect(appReducer(undefined, { type: START_MOVIES_LOADING }))
      .toEqual({
        isLoadingMovies: true,
        isLoadingSelectedMovie: false,
      });
    expect(appReducer(undefined, { type: END_MOVIES_LOADING })).toEqual(initialState);
  });

  it('should handle selected movie loading status', () => {
    expect(appReducer(undefined, { type: START_SELECTED_MOVIE_LOADING }))
      .toEqual({
        isLoadingMovies: false,
        isLoadingSelectedMovie: true,
      });
    expect(appReducer(undefined, { type: END_SELECTED_MOVIE_LOADING })).toEqual(initialState);
  });
});
