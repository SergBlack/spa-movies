import React, { useContext } from 'react';
import { string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Logo from '../Logo';

import LogoImage from '../../assets/images/logo.svg';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
`;

const Footer = ({ height, bgColor }) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <StyledFooter
      height={height}
      bgColor={mainColors[bgColor]}
    >
      <Logo src={LogoImage} />
    </StyledFooter>
  );
};

Footer.propTypes = {
  height: string,
  bgColor: string,
};

Footer.defaultProps = {
  height: '90px',
  bgColor: 'darkGray',
};

export default Footer;
