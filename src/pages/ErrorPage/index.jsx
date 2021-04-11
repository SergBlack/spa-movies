import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Footer from '@components/Footer';
import Image from '@components/Img';

import LogoImage from '@assets/images/logo.svg';
import NotFound from '@assets/images/404-error.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  height: 90vh;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
`;

const StyledNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1;
  padding-bottom: 100px;
`;

const StyledImageWrapper = styled.div`
  width: 50%;
`;

const ErrorPage = () => {
  const history = useHistory();
  const { mainColors } = useContext(ThemeContext);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <StyledWrapper bgColor={mainColors.dark}>
      <StyledLogoWrapper>
        <Logo src={LogoImage} onClick={handleClick} />
      </StyledLogoWrapper>
      <StyledNotFoundWrapper>
        <StyledImageWrapper>
          <Image posterPath={NotFound} />
        </StyledImageWrapper>
        <Button
          text="go back to home"
          onClick={handleClick}
        />
      </StyledNotFoundWrapper>
      <Footer />
    </StyledWrapper>
  );
};

export default ErrorPage;
