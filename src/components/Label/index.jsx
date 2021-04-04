import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { string } from 'prop-types';

const StyledLabel = styled.label`
  margin-bottom: 5px;
  color: ${({ color }) => color};
  text-transform: uppercase;
`;

const Label = ({ text, color }) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledLabel
      htmlFor={text}
      color={mainColors[color]}
    >
      {text}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: string,
  color: string,
};

Label.defaultProps = {
  text: '',
  color: 'red',
};

export default Label;
