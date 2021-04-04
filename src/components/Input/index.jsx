import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useField } from 'formik';
import {
  bool,
  number,
  string,
} from 'prop-types';

import Label from '@components/Label';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 10px 0;
`;

const StyledInput = styled.input`
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  flex: 1 1 auto;
  border: none;
  border-radius: 5px;
  padding: 0 16px;
  font-size: 18px;
  outline: none;
  border: ${({ error, errorColor, bgColor }) => (
    error ? `1px solid ${errorColor}` : `1px solid ${bgColor}`
  )};
  
  ::placeholder {
    font-size: 18px;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const StyledError = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ errorColor }) => errorColor};
  font-size: 12px;
  height: 16px;
`;

const Input = ({
  type,
  label,
  height,
  color,
  opacity,
  disabled,
  ...props
}) => {
  const { mainColors, textColorsDependBgColor } = useContext(ThemeContext);
  const [field, meta] = useField(props);

  return (
    <InputWrapper>
      {label && <Label text={label} />}
      <StyledInput
        type={type}
        id={label && label}
        height={height}
        textColor={textColorsDependBgColor[color]}
        bgColor={mainColors[color]}
        opacity={opacity}
        disabled={disabled}
        error={meta.error && meta.touched}
        errorColor={mainColors.red}
        {...field}
        {...props}
      />
      <StyledError errorColor={mainColors.red}>{meta.touched && meta.error}</StyledError>
    </InputWrapper>
  );
};

Input.propTypes = {
  type: string,
  label: string,
  height: string,
  color: string,
  opacity: number,
  disabled: bool,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  height: '60px',
  color: 'darkGray',
  opacity: 1,
  disabled: false,
};

export default Input;
