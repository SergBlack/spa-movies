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
  background: ${({ transparent }) => (transparent ? 'transparent' : '')};
  font-size: 20px;
  text-transform: uppercase;
  border-radius: ${({ shape }) => (shape === 'square' ? '5px' : '50%')};
  border: none;
  padding: 0;

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

const Button = React.memo(({
  text,
  icon,
  height,
  width,
  color,
  shape,
  opacity,
  disabled,
  onClick,
  transparent,
}) => {
  const { mainColors, textColorsDependBgColor, shadesMainColors } = useContext(ThemeContext);

  return (
    <StyledButton
      type="button"
      height={height}
      width={width}
      bgColor={mainColors[color]}
      textColor={textColorsDependBgColor[color]}
      hoverColor={shadesMainColors[color]}
      transparent={transparent}
      shape={shape}
      opacity={opacity}
      disabled={disabled}
      onClick={onClick}
    >
      {icon
        ? (
          <StyledImage
            src={icon}
            alt="icon"
            color={mainColors[color]}
          />
        )
        : text}
    </StyledButton>
  );
});

Button.propTypes = {
  text: string,
  icon: string,
  height: string,
  width: string,
  color: string,
  transparent: bool,
  shape: string,
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
  transparent: false,
  shape: 'square',
  opacity: 1,
  disabled: false,
  onClick: () => {},
};

export default Button;
