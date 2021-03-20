import React, { useState, useContext, useEffect } from 'react';
import { shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import {
  selectMovies,
  selectIsLoadingMovies,
  selectTotalAmount,
} from '@/redux/selectors';
import { loadMovies } from '@/redux/actions';

import FilterPanel from '@components/FilterPanel';
import SortPanel from '@components/SortPanel';
import Counter from '@components/Counter';
import MovieList from '@components/MovieList';

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

// TODO: replace with real data
const filtersList = ['ALL', 'ACTION', 'ADVENTURE', 'DRAMA', 'MYSTERY', 'THRILLER'];
const sortList = ['RELEASE DATE', 'RATING'];

const Main = ({ movieInfoRef }) => {
  const [currentFilter, setCurrentFilter] = useState('ALL');
  const { mainColors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const totalAmount = useSelector(selectTotalAmount);
  const isLoadingMovies = useSelector(selectIsLoadingMovies);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const onFilterClick = (value) => {
    setCurrentFilter(value);
  };

  return (
    <StyledMain>
      <StyledFilterBlock color={mainColors.gray}>
        <FilterPanel
          filtersList={filtersList}
          currentFilter={currentFilter}
          onClick={onFilterClick}
        />
        <SortPanel sortList={sortList} />
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
