import React, { useContext } from 'react';
import { number, string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Title from '@components/Title';

import getYear from '@helpers/getYear';
import trimStringByLength from '@helpers/trimStringByLength';
import { OVERVIEW_NOT_SET, TITLE_NOT_SET } from '@constants/textMessages';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 320px;
  margin-left: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #90ee90;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #90ee90;
`;

const TextWrapper = styled.p`
  margin-top: 0;
  text-overflow: ellipsis;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDate = styled.div`
  color: ${({ color }) => color};
  font-size: 24px;
  margin: 0 30px 16px 0;
`;

const TextContent = ({
  title,
  voteAverage,
  tagline,
  releaseDate,
  runtime,
  overview,
}) => {
  const { mainColors } = useContext(ThemeContext);

  return (
    <InfoWrapper>
      <TitleWrapper>
        <Title content={title || TITLE_NOT_SET} size="26px" />
        <StyledRating>{voteAverage}</StyledRating>
      </TitleWrapper>
      <TextWrapper>
        {tagline}
      </TextWrapper>
      <DateWrapper>
        <StyledDate color={mainColors.red}>
          {getYear(releaseDate)}
        </StyledDate>

        <StyledDate color={mainColors.red}>
          {`${runtime} min`}
        </StyledDate>
      </DateWrapper>
      <TextWrapper>
        {trimStringByLength(overview, 500) || OVERVIEW_NOT_SET}
      </TextWrapper>
    </InfoWrapper>
  );
};

TextContent.propTypes = {
  title: string,
  voteAverage: number,
  tagline: string,
  releaseDate: string,
  runtime: number,
  overview: string,
};

TextContent.defaultProps = {
  title: '',
  voteAverage: 0,
  tagline: '',
  releaseDate: '',
  runtime: 0,
  overview: '',
};

export default TextContent;
