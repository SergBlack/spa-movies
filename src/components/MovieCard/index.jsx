import React, { useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Title from '../Title';
import Button from '../Button';
import Dropdown from '../Dropdown';

import DetailsIcon from '../../assets/images/details.svg';
import CloseIcon from '../../assets/images/close.svg';

const StyledMovieCard = styled.div`
  width: 18%;
  margin: 16px 16px;
  
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  @media screen and (max-width: 2080px) {
    width: 22%;
  }

  @media screen and (max-width: 1440px) {
    width: 28%;
  }

  @media screen and (max-width: 1000px) {
    width: 42%;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
`;

const Paragraph = styled.div`
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
`;

const MovieCard = ({
  posterPath,
  title,
  releaseDate,
  genres,
}) => {
  const [isShowCardDetails, setShowCardDetails] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onOpenDetailsClick = () => {
    setShowCardDetails(true);
  };

  const onCloseDetailsClick = () => {
    setShowCardDetails(false);
  };

  const onMouseEnterCard = () => {
    setIsHover(true);
  };

  const onMouseLeaveCard = () => {
    setIsHover(false);
    setShowCardDetails(false);
  };

  // TODO: декомпозировать
  return (
    <StyledMovieCard
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
    >
      <ImageContainer>
        <Image src={posterPath} alt="Poster" />
        {isHover && (
          <ButtonWrapper>
            <Button
              icon={DetailsIcon}
              height="40px"
              width="40px"
              color="dark"
              type="circle"
              onClick={onOpenDetailsClick}
            />
          </ButtonWrapper>
        )}
        {isShowCardDetails && (
          <Dropdown>
            <Button
              icon={CloseIcon}
              onClick={onCloseDetailsClick}
              height="30px"
              width="30px"
              color="dark"
            />
            <Button text="edit" width="100%" height="40px" color="dark" />
            <Button text="delete" width="100%" height="40px" color="dark" />
          </Dropdown>
        )}
      </ImageContainer>

      <DescContainer>
        <div>
          <Title content={title} size="20px" />
          <Paragraph>{genres}</Paragraph>
        </div>
        <div>
          {new Date(releaseDate).getFullYear()}
        </div>
      </DescContainer>

    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  posterPath: string,
  title: string,
  releaseDate: string,
  genres: string,
};

MovieCard.defaultProps = {
  posterPath: '',
  title: '',
  releaseDate: '',
  genres: '',
};

export default MovieCard;
