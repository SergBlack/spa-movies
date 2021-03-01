import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Button from '../Button';
import Title from '../Title';
import Search from '../Search';

import BackgroundImage from '../../assets/images/header-background.jpg';
import LogoImage from '../../assets/images/logo.svg';

const StyledHeader = styled.header`
  height: 595px;
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
  padding: 50px 150px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Header = () => (
  <StyledHeader>
    <TopContent>
      <Logo src={LogoImage} />
      <Button
        text="+ add movie"
        color="gray"
        opacity={0.9}
      />
    </TopContent>

    <MainContent>
      <Title content="find your movie" uppercase />
      <SearchContainer>
        <Search
          placeholder="What do you want?"
          color="darkGray"
          opacity={0.9}
        />
        <Button text="search" width="260px" />
      </SearchContainer>
    </MainContent>
  </StyledHeader>
);

export default Header;