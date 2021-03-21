import React, { useContext, useEffect } from 'react';
import { shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import {
  selectMovies,
  selectIsLoadingMovies,
  selectTotalAmount,
  selectCurrentSort,
  selectSortParams,
  selectCurrentFilter,
  selectFilterParams,
} from '@/redux/selectors';
import {
  loadMovies,
  setCurrentFilter,
  setCurrentSort, setFilterParams,
  setSortParams,
} from '@/redux/actions';
import objectParamsToQueryString from '@helpers/objectParamsToQueryString';

import FilterPanel from '@components/FilterPanel';
import SortPanel from '@components/SortPanel';
import Counter from '@components/Counter';
import MovieList from '@components/MovieList';

import GENRES from '@constants/genres';
import { SORT_LIST, SORT_MAP } from '@constants/sort';

const StyledMain = styled.main`
  min-height: 700px;
  width: 100%;
  background-color: #232323;
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
  const { mainColors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(selectMovies);
  const totalAmount = useSelector(selectTotalAmount);
  const isLoadingMovies = useSelector(selectIsLoadingMovies);
  const currentSort = useSelector(selectCurrentSort);
  const sortParams = useSelector(selectSortParams);
  const currentFilter = useSelector(selectCurrentFilter);
  const filterParams = useSelector(selectFilterParams);

  useEffect(() => {
    const params = objectParamsToQueryString({ ...sortParams, ...filterParams });
    dispatch(loadMovies(params));
    history.push(`/movies${params}`);
  }, [dispatch, sortParams, filterParams, history]);

  const onSortChange = (type) => {
    dispatch(setCurrentSort(type));
    const params = SORT_MAP[type] ?? '';
    dispatch(setSortParams(params));
  };

  const onFilterClick = (value) => {
    dispatch(setCurrentFilter(value));
    if (value === 'All') {
      dispatch(setFilterParams({}));
    } else {
      dispatch(setFilterParams({ searchBy: 'genres', filter: value.toLowerCase() }));
    }
  };

  return (
    <StyledMain>
      <StyledFilterBlock color={mainColors.gray}>
        <FilterPanel
          filtersList={GENRES}
          currentFilter={currentFilter}
          onClick={onFilterClick}
        />
        <SortPanel current={currentSort} sortList={SORT_LIST} onChange={onSortChange} />
      </StyledFilterBlock>

      <Counter count={totalAmount} text="movies found" />
      {
        isLoadingMovies
          ? <div>Loading movies...</div>
          : <MovieList movies={movies} movieInfoRef={movieInfoRef} />
      }
    </StyledMain>
  );
};

Main.propTypes = {
  movieInfoRef: shape({}).isRequired,
};

export default Main;
