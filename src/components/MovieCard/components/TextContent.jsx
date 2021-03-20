import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Title from '@components/Title';

import getYear from '@helpers/getYear';
import { GENRES_NOT_SET, TITLE_NOT_SET } from '@constants/textMessages';

const TextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Paragraph = styled.div`
  margin: 0;
`;

const TextContent = ({ title, genres, releaseDate }) => (
  <TextWrapper>
    <div>
      <Title size="20px" content={title || TITLE_NOT_SET} />
      <Paragraph>{genres || GENRES_NOT_SET}</Paragraph>
    </div>
    <div>
      {getYear(releaseDate)}
    </div>
  </TextWrapper>
);

TextContent.propTypes = {
  title: string.isRequired,
  genres: string,
  releaseDate: string.isRequired,
};

TextContent.defaultProps = {
  genres: 'No genres set',
};

export default TextContent;
