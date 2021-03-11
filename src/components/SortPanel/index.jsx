import React, { useContext } from 'react';
import { arrayOf, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Select from '../Select';

const StyledSortPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 350px;
  font-size: 20px;
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
      <Select
        placeholder="Select sort"
        value={sortList[0]}
        onChange={() => {}}
        optionList={sortList}
        height={height}
        bgColor={bgColor}
        textColor={textColor}
      />
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
  height: '50px',
  bgColor: 'darkGray',
  textColor: 'light',
};

export default SortPanel;
