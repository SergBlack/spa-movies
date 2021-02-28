import React, { useContext } from 'react';
import { arrayOf, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledSortPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;

const StyledSortText = styled.div`
  color: ${({ color }) => color};
`;

const StyledSortList = styled.select`
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  margin-left: 16px;
  padding: 0;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 24px;
`;

const SortPanel = ({
  sortList,
  height,
  bgColor,
  color,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledSortPanel>
      <StyledSortText color={mainColors[bgColor]}>SORT BY</StyledSortText>
      <StyledSortList
        height={height}
        bgColor={mainColors[bgColor]}
        color={mainColors[color]}
      >
        {sortList.map((item) => <option key={item}>{item}</option>)}
      </StyledSortList>
    </StyledSortPanel>
  );
};

SortPanel.propTypes = {
  sortList: arrayOf(string),
  height: string,
  bgColor: string,
  color: string,
};

SortPanel.defaultProps = {
  sortList: [],
  height: '40px',
  bgColor: 'darkGray',
  color: 'light',
};

export default SortPanel;
