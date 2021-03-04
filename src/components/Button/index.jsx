import React, { useContext } from 'react';
import {
  bool,
  number,
  string,
  func,
} from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  padding: 0;
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

const StyledImage = styled.img`
  height: 70%;
  width: 70%;
`;

const Button = ({
  text,
  icon,
  height,
  width,
  color,
  opacity,
  disabled,
  onClick,
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
      onClick={onClick}
    >
      {icon
        ? (
          <StyledImage
            src={icon}
            alt="close"
            color={mainColors[color]}
          />
        )
        : text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: string,
  icon: string,
  height: string,
  width: string,
  color: string,
  opacity: number,
  disabled: bool,
  onClick: func,
};

Button.defaultProps = {
  text: '',
  icon: '',
  height: '60px',
  width: '200px',
  color: 'red',
  opacity: 1,
  disabled: false,
  onClick: () => {},
};

export default Button;
