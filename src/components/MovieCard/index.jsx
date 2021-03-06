import React, { useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import MediaContent from './components/MediaContent';
import DescContent from './components/DescContent';

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
  width: calc(1/5 * 100% - 32px);
  
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  
  @media screen and (max-width: 1920px) {
    width: calc(1/4 * 100% - 32px);
  }

  @media screen and (max-width: 1440px) {
    width: calc(1/3 * 100% - 32px);
  }

  @media screen and (max-width: 1200px) {
    width: calc(1/2 * 100% - 32px);
  }

  @media screen and (max-width: 800px) {
    width: calc(100% - 32px);
  }
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

  return (
    <StyledMovieCard
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
    >
      <MediaContent
        posterPath={posterPath}
        isHover={isHover}
        isShowCardDetails={isShowCardDetails}
        onOpenDetailsClick={onOpenDetailsClick}
        onCloseDetailsClick={onCloseDetailsClick}
      />
      <DescContent
        title={title}
        releaseDate={releaseDate}
        genres={genres}
      />
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
