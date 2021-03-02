import React, { useContext } from 'react';
import { bool, number, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 10px;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const Button = ({
  text,
  height,
  width,
  color,
  opacity,
  disabled,
}) => {
  const { mainColors, textColorsDependBgColor, shadesMainColors } = useContext(ThemeContext);

  return (
    <StyledButton
      height={height}
      width={width}
      bgColor={mainColors[color]}
      textColor={textColorsDependBgColor[color]}
      hoverColor={shadesMainColors[color]}
      opacity={opacity}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: string.isRequired,
  height: string,
  width: string,
  color: string,
  opacity: number,
  disabled: bool,
};

Button.defaultProps = {
  height: '60px',
  width: '200px',
  color: 'red',
  opacity: 1,
  disabled: false,
};

export default Button;
