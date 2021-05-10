import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import { loadMovies, loadSelectedMovie } from './redux/actions/movieActions';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/search',
    component: HomePage,
    exact: true,
    fetchMethod: (params) => loadMovies(params),
  },
  {
    path: '/film/:id',
    component: HomePage,
    exact: true,
    fetchMethod: (id) => loadSelectedMovie(id),
  },
  {
    path: '*',
    component: ErrorPage,
    exact: false,
  },
];
