import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  bool,
  number,
  string,
  func,
  oneOfType,
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
  
  ::placeholder {
    font-size: 18px;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const Input = React.memo(({
  value,
  onChange,
  name,
  type,
  label,
  placeholder,
  height,
  color,
  opacity,
  disabled,
}) => {
  const { mainColors, textColorsDependBgColor } = useContext(ThemeContext);

  return (
    <InputWrapper>
      {label && <Label text={label} />}
      <StyledInput
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={label && label}
        placeholder={placeholder}
        height={height}
        textColor={textColorsDependBgColor[color]}
        bgColor={mainColors[color]}
        opacity={opacity}
        disabled={disabled}
      />
    </InputWrapper>
  );
});

Input.propTypes = {
  value: oneOfType([string, number]),
  onChange: func,
  name: string,
  type: string,
  label: string,
  placeholder: string,
  height: string,
  color: string,
  opacity: number,
  disabled: bool,
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  height: '60px',
  color: 'light',
  opacity: 1,
  disabled: false,
};

export default Input;
