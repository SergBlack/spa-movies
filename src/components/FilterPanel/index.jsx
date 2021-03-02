import React, { useContext } from 'react';
import { arrayOf, string, func } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledFilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px -12px;
  font-size: 20px;
`;

const StyledFilterItem = styled.div`
  margin: 0 12px;
  color: ${({ color, active }) => active && color};
  border-bottom: ${({ color, active }) => active && `2px solid ${color}`};
  
  :hover {
    cursor: pointer;
  }
`;

const FilterPanel = ({
  filtersList,
  color,
  currentFilter,
  onClick,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledFilterBar>
      {filtersList.map((filter) => (
        <StyledFilterItem
          key={filter}
          onClick={() => onClick(filter)}
          active={currentFilter === filter}
          color={mainColors[color]}
        >
          {filter}
        </StyledFilterItem>
      ))}
    </StyledFilterBar>
  );
};

FilterPanel.propTypes = {
  filtersList: arrayOf(string),
  color: string,
  currentFilter: string,
  onClick: func.isRequired,
};

FilterPanel.defaultProps = {
  filtersList: [],
  color: 'red',
  currentFilter: 'ALL',
};

export default FilterPanel;
