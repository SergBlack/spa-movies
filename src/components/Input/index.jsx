import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { bool, number, string } from 'prop-types';

const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: 5px;
  padding: 0 16px;
  font-size: 24px;
  outline: none;
  margin: 10px;
  
  ::placeholder {
    font-size: 24px;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const Input = ({
  placeholder,
  height,
  width,
  color,
  opacity,
  disabled,
}) => {
  const { mainColors, textColorsDependBgColor } = useContext(ThemeContext);

  return (
    <StyledInput
      placeholder={placeholder}
      height={height}
      width={width}
      textColor={textColorsDependBgColor[color]}
      bgColor={mainColors[color]}
      opacity={opacity}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  placeholder: string.isRequired,
  height: string,
  width: string,
  color: string,
  opacity: number,
  disabled: bool,
};

Input.defaultProps = {
  height: '60px',
  width: '600px',
  color: 'light',
  opacity: 1,
  disabled: false,
};

export default Input;
