import { combineReducers } from 'redux';

import moviesReducer from './reducers/moviesReducer';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  app: appReducer,
});

export default rootReducer;
