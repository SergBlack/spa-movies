import React, { useContext } from 'react';
import {
  arrayOf,
  func,
  string,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Label from '../Label';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 16px 0;
`;

const StyledSelect = styled.select`
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;
`;

const StyledOption = styled.option`
  padding: 0 1px;
`;

const Select = ({
  value,
  onChange,
  name,
  label,
  optionList,
  height,
  bgColor,
  textColor,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <SelectWrapper>
      {label && <Label text={label} />}
      <StyledSelect
        height={height}
        bgColor={mainColors[bgColor]}
        color={mainColors[textColor]}
        value={value}
        onChange={onChange}
        name={name}
      >
        {optionList.map((item) => <StyledOption key={item} value={item}>{item}</StyledOption>)}
      </StyledSelect>
    </SelectWrapper>
  );
};

Select.propTypes = {
  value: string,
  onChange: func,
  name: string,
  label: string,
  optionList: arrayOf(string),
  height: string,
  bgColor: string,
  textColor: string,
};

Select.defaultProps = {
  value: '',
  onChange: () => {},
  name: '',
  label: '',
  optionList: [],
  height: '40px',
  bgColor: 'darkGray',
  textColor: 'light',
};

export default Select;
