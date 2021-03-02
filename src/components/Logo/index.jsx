import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Logo = ({ src, height, width }) => (
  <StyledLogo
    src={src}
    alt="logo"
    height={height}
    width={width}
  />
);

Logo.propTypes = {
  src: string.isRequired,
  height: string,
  width: string,
};

Logo.defaultProps = {
  height: '50px',
  width: '250px',
};

export default Logo;
