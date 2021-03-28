import { combineReducers } from 'redux';

import moviesReducer from './reducers/moviesReducer';
import movieFormReducer from './reducers/movieFormReducer';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieForm: movieFormReducer,
  app: appReducer,
});

export default rootReducer;
