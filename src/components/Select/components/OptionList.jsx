import React, { useContext } from 'react';
import {
  arrayOf,
  func,
  string,
  bool,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import OptionItem from './OptionItem';

const StyledOptionList = styled.div`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.30);
  padding: 0;
  margin-top: 3px;
  max-height: 180px;
  overflow-y: ${({ isScroll }) => (isScroll ? 'scroll' : '')} ;
`;

const OptionList = ({
  optionList,
  selected,
  selectedList,
  listBgColor,
  textColor,
  onChange,
  onClose,
  multiple,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledOptionList
      bgColor={mainColors[listBgColor]}
      color={mainColors[textColor]}
      isScroll={optionList.length >= 5}
    >
      {optionList.map((item) => (
        <OptionItem
          key={item}
          item={item}
          selected={item === selected || selectedList.includes(item)}
          onChange={onChange}
          onClose={onClose}
          multiple={multiple}
        />
      ))}
    </StyledOptionList>
  );
};

OptionList.propTypes = {
  optionList: arrayOf(string).isRequired,
  selected: string,
  selectedList: arrayOf(string),
  listBgColor: string,
  textColor: string,
  onChange: func.isRequired,
  onClose: func.isRequired,
  multiple: bool,
};

OptionList.defaultProps = {
  selected: '',
  selectedList: [],
  listBgColor: 'dark',
  textColor: 'light',
  multiple: false,
};

export default OptionList;
