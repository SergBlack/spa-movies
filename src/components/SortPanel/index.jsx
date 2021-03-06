import React, { useContext } from 'react';
import { arrayOf, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Select from '../Select';

const StyledSortPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  font-size: 20px;
  margin: 8px;
`;

const StyledSortText = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 16px;
  color: ${({ color }) => color};
`;

const SortPanel = ({
  sortList,
  height,
  bgColor,
  textColor,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledSortPanel>
      <StyledSortText color={mainColors[bgColor]}>SORT BY</StyledSortText>
      <Select optionList={sortList} height={height} bgColor={bgColor} textColor={textColor} />
    </StyledSortPanel>
  );
};

SortPanel.propTypes = {
  sortList: arrayOf(string),
  height: string,
  bgColor: string,
  textColor: string,
};

SortPanel.defaultProps = {
  sortList: [],
  height: '40px',
  bgColor: 'darkGray',
  textColor: 'light',
};

export default SortPanel;
