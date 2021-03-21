import React, { useContext } from 'react';
import { arrayOf, string, func } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Select from '@components/Select';

const StyledSortPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 300px;
  font-size: 18px;
`;

const StyledSortText = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 16px;
  color: ${({ color }) => color};
`;

const SortPanel = ({
  current,
  sortList,
  height,
  bgColor,
  textColor,
  onChange,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledSortPanel>
      <StyledSortText color={mainColors[bgColor]}>SORT BY</StyledSortText>
      <Select
        placeholder="Select sort"
        value={current}
        onChange={onChange}
        optionList={sortList}
        selected={current}
        height={height}
        bgColor={bgColor}
        textColor={textColor}
      />
    </StyledSortPanel>
  );
};

SortPanel.propTypes = {
  current: string,
  sortList: arrayOf(string),
  height: string,
  bgColor: string,
  textColor: string,
  onChange: func.isRequired,
};

SortPanel.defaultProps = {
  current: '',
  sortList: [],
  height: '50px',
  bgColor: 'darkGray',
  textColor: 'light',
};

export default SortPanel;
