import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import { selectMovies, selectIsLoadingMovies, selectTotalAmount } from '@/redux/selectors';
import { loadMovies } from '@/redux/actions/movieActions';
import useQuery from '@hooks/useQuery';

import FilterPanel from '@components/FilterPanel';
import SortPanel from '@components/SortPanel';
import Counter from '@components/Counter';
import MovieList from '@components/MovieList';

import { GENRES_LIST, GENRES_PARAMS_MAP } from '@constants/genres';
import { SORT_LIST, SORT_PARAMS_MAP } from '@constants/sort';

const StyledMain = styled.main`
  min-height: 700px;
  width: 100%;
    background-color: ${({ bgColor }) => bgColor};
`;

const StyledFilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
  margin: 0 48px;
  border-bottom: ${({ color }) => `2px solid ${color}`};
`;

const Main = ({ movieInfoRef }) => {
  const [currentFilter, setCurrentFilter] = useState('');
  const [currentSort, setCurrentSort] = useState('');
  const [searchParams, setSearchParams] = useQuery(useState({}));
  const { mainColors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const movies = useSelector(selectMovies);
  const totalAmount = useSelector(selectTotalAmount);
  const isLoadingMovies = useSelector(selectIsLoadingMovies);

  useEffect(() => {
    const queryParamsString = query.toString();
    if (queryParamsString) {
      dispatch(loadMovies(queryParamsString));
    }
  }, [dispatch, query]);

  const onSortChange = (type) => {
    const { sortBy, sortOrder, ...newSearchParams } = searchParams;
    const newSortParams = SORT_PARAMS_MAP[type] ?? {};
    setSearchParams({ ...newSearchParams, ...newSortParams });
    setCurrentSort(type);
  };

  const onFilterClick = (value) => {
    const { searchBy, filter, ...newSearchParams } = searchParams;
    const newFilterParams = GENRES_PARAMS_MAP[value] ?? {};
    setSearchParams({ ...newSearchParams, ...newFilterParams });
    setCurrentFilter(value);
  };

  return (
    <StyledMain bgColor={mainColors.dark}>
      <StyledFilterBlock color={mainColors.gray}>
        <FilterPanel
          filtersList={['All', ...GENRES_LIST]}
          currentFilter={currentFilter}
          onClick={onFilterClick}
        />
        <SortPanel
          current={currentSort}
          sortList={[...SORT_LIST, 'Reset sort']}
          onChange={onSortChange}
        />
      </StyledFilterBlock>

      <Counter count={totalAmount} text="movies found" />
      {isLoadingMovies
        ? <div>Loading movies...</div>
        : <MovieList movies={movies} movieInfoRef={movieInfoRef} />}
    </StyledMain>
  );
};

Main.propTypes = {
  movieInfoRef: shape({}).isRequired,
};

export default Main;
