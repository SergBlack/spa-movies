import React, { useContext } from 'react';
import { string, bool } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ textColor }) => textColor};
  font-size: ${({ size }) => size};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  margin: 0;
`;

const Title = ({
  content,
  color,
  size,
  uppercase,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledTitle
      textColor={mainColors[color]}
      size={size}
      uppercase={uppercase}
    >
      {content}
    </StyledTitle>
  );
};

Title.propTypes = {
  content: string.isRequired,
  color: string,
  size: string,
  uppercase: bool,
};

Title.defaultProps = {
  color: 'light',
  size: '46px',
  uppercase: false,
};

export default Title;
