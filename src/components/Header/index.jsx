import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Logo from '../Logo';
import Button from '../Button';
import Title from '../Title';
import Input from '../Input';
import Modal from '../Modal';
import AddMovieForm from '../../forms/AddMovieForm';

import useModal from '../../hooks/useModal';

import BackgroundImage from '../../assets/images/header-background.jpg';
import LogoImage from '../../assets/images/logo.svg';

const StyledHeader = styled.header`
  height: 450px;
  width: 100%;
  margin: 80px 0 20px 0;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 200px;
  max-width: 800px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  margin: 0 20px;
`;

const Header = () => {
  const { isOpen, close, open } = useModal();
  const { mainColors } = useContext(ThemeContext);

  return (
    <>
      <StyledHeader>
        <TopContent>
          <Logo src={LogoImage} />
          <Button
            text="+ add movie"
            color="gray"
            opacity={0.9}
            onClick={open}
          />
        </TopContent>

        <MainContent>
          <Title content="find your movie" uppercase />
          <SearchContainer>
            <Input
              placeholder="What do you want?"
              color="darkGray"
              opacity={0.9}
            />
            <ButtonWrapper>
              <Button text="search" width="200px" />
            </ButtonWrapper>
          </SearchContainer>
        </MainContent>
      </StyledHeader>
      <Modal isOpen={isOpen} close={close} color={mainColors.dark}>
        <AddMovieForm formTitle="add movie" />
      </Modal>
    </>
  );
};

export default Header;
