import React, { useState, useContext } from 'react';
import {
  arrayOf,
  shape,
  string,
  func,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import FilterPanel from '../FilterPanel';
import SortPanel from '../SortPanel';
import Counter from '../Counter';
import MovieList from '../MovieList';

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

const Main = ({
  data, filtersList, sortList, onCardClick,
}) => {
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

      <Counter count={data.length} text="movies found" />
      <MovieList movies={data} onCardClick={onCardClick} />
    </StyledMain>
  );
};

Main.propTypes = {
  data: arrayOf(shape({})),
  filtersList: arrayOf(string),
  sortList: arrayOf(string),
  onCardClick: func.isRequired,
};

Main.defaultProps = {
  data: [],
  filtersList: [],
  sortList: [],
};

export default Main;
