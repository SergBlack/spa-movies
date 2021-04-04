import React, { useContext, useState } from 'react';
import { arrayOf, string, bool } from 'prop-types';
import { useField } from 'formik';
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
  border: ${({ error, errorColor, bgColor }) => (
    error ? `1px solid ${errorColor}` : `1px solid ${bgColor}`
  )};

  :hover {
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  height: 30%;
  width: 8%;
`;

const StyledError = styled.div`
  color: ${({ errorColor }) => errorColor};
  font-size: 12px;
  height: 16px;
`;

const Select = React.memo(({
  placeholder,
  label,
  optionList,
  height,
  bgColor,
  listBgColor,
  textColor,
  multiple,
  ...props
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const { mainColors } = useContext(ThemeContext);
  const [field, meta] = useField(props);

  const value = Array.isArray(field.value) ? field.value.join(', ') : field.value;

  return (
    <SelectWrapper>
      {label && <Label text={label} />}
      <StyledSelect
        height={height}
        bgColor={mainColors[bgColor]}
        color={mainColors[textColor]}
        onClick={() => setIsListOpen(!isListOpen)}
        error={meta.error && meta.touched}
        errorColor={mainColors.red}
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
          listBgColor={listBgColor}
          multiple={multiple}
          {...field}
          {...props}
        />
      )}
      <StyledError errorColor={mainColors.red}>{meta.touched && meta.error}</StyledError>
    </SelectWrapper>
  );
});

Select.propTypes = {
  placeholder: string.isRequired,
  label: string,
  optionList: arrayOf(string).isRequired,
  height: string,
  bgColor: string,
  listBgColor: string,
  textColor: string,
  multiple: bool,
};

Select.defaultProps = {
  label: '',
  height: '50px',
  bgColor: 'darkGray',
  listBgColor: 'dark',
  textColor: 'light',
  multiple: false,
};

export default Select;
