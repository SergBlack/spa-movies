import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import FilterPanel from '../FilterPanel';
import SortPanel from '../SortPanel';
import Counter from '../Counter';
import MovieList from '../MovieList';

// TODO: replace with real data
import movies from './movies.json';

// TODO: replace with real data
const filtersList = ['ALL', 'ACTION', 'ADVENTURE', 'DRAMA', 'MYSTERY', 'THRILLER'];
const sortList = ['RELEASE DATE', 'TITLE'];

const StyledMain = styled.main`
  min-height: 700px;
  width: 100%;
  background-color: #232323;
`;

const StyledFilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  margin: 0 48px;
  border-bottom: ${({ color }) => `2px solid ${color}`};
`;

const Main = () => {
  const [currentFilter, setCurrentFilter] = useState('ALL');
  const { mainColors } = useContext(ThemeContext);

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

      <Counter count={movies.length} text="movies found" />
      <MovieList movies={movies} />
    </StyledMain>
  );
};

export default Main;
