import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  
  :hover {
    cursor: pointer;
  }
`;

const Logo = ({
  src,
  height,
  width,
  onClick,
}) => (
  <StyledLogo
    src={src}
    alt="logo"
    height={height}
    width={width}
    onClick={onClick}
  />
);

Logo.propTypes = {
  src: string.isRequired,
  height: string,
  width: string,
  onClick: func,
};

Logo.defaultProps = {
  height: '50px',
  width: '250px',
  onClick: () => {},
};

export default Logo;
