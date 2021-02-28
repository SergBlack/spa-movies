import React, { useContext } from 'react';
import { arrayOf, string, func } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledFilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  margin: 16px -12px;
  font-size: 24px;
`;

const StyledFilterItem = styled.div`
  margin: 0 12px;
  color: ${({ color, active }) => active && color};
  border-bottom: ${({ color, active }) => active && `2px solid${color}`};
  
  :hover {
    cursor: pointer;
  }
`;

const FilterPanel = ({
  filtersList,
  color,
  current,
  onClick,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledFilterBar>
      {filtersList.map((filter) => (
        <StyledFilterItem
          key={filter}
          onClick={onClick}
          active={current.toUpperCase() === filter.toUpperCase()}
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
  current: string,
  onClick: func.isRequired,
};

FilterPanel.defaultProps = {
  filtersList: [],
  color: 'red',
  current: 'all',
};

export default FilterPanel;
