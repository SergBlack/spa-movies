import React, { useContext, useState } from 'react';
import {
  arrayOf,
  func,
  string,
  bool,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Label from '@components/Label';
import OptionList from '@components/Select/components/OptionList';

import ArrowDown from '@assets/images/arrowDown.svg';
import ArrowUp from '@assets/images/arrowUp.svg';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 16px 0;
  position: relative;
`;

const StyledSelect = styled.div`
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  height: 30%;
  width: 8%;
`;

const Select = React.memo(({
  value,
  placeholder,
  onChange,
  label,
  optionList,
  selected,
  selectedList,
  height,
  bgColor,
  listBgColor,
  textColor,
  multiple,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const { mainColors } = useContext(ThemeContext);

  return (
    <SelectWrapper>
      {label && <Label text={label} />}
      <StyledSelect
        height={height}
        bgColor={mainColors[bgColor]}
        color={mainColors[textColor]}
        onClick={() => setIsListOpen(!isListOpen)}
      >
        {value || placeholder}
        <StyledImage
          src={isListOpen ? ArrowDown : ArrowUp}
          alt="arrow"
        />
      </StyledSelect>
      {isListOpen && (
        <OptionList
          optionList={optionList}
          selected={selected}
          selectedList={selectedList}
          listBgColor={listBgColor}
          onChange={onChange}
          onClose={() => setIsListOpen(false)}
          multiple={multiple}
        />
      )}
    </SelectWrapper>
  );
});

Select.propTypes = {
  value: string,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  label: string,
  optionList: arrayOf(string).isRequired,
  selected: string,
  selectedList: arrayOf(string),
  height: string,
  bgColor: string,
  listBgColor: string,
  textColor: string,
  multiple: bool,
};

Select.defaultProps = {
  value: '',
  label: '',
  selected: '',
  selectedList: [],
  height: '50px',
  bgColor: 'darkGray',
  listBgColor: 'dark',
  textColor: 'light',
  multiple: false,
};

export default Select;
