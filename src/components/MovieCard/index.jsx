import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Title from '../Title';

const StyledMovieCard = styled.div`
  height: 640px;
  width: 360px;
  margin: 16px 48px;
  
  :hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  height: 540px;
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
}) => (
  <StyledMovieCard>
    <ImageContainer>
      <Image src={posterPath} alt="Poster" />
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
