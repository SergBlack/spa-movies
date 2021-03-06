import React, { useContext } from 'react';
import { node, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const StyledDropdown = styled.div`
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 5px;
  position: absolute;
  margin: 10px;
  padding: 10px;
  top: 2%;
  right: 2%;
`;

const Dropdown = ({
  width,
  color,
  children,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledDropdown
      width={width}
      color={mainColors[color]}
    >
      {children}
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  width: string,
  color: string,
  children: node.isRequired,
};

Dropdown.defaultProps = {
  width: '80%',
  color: 'dark',
};

export default Dropdown;
