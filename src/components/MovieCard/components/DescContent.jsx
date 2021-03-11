import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Title from '../../Title';

import { DATE_NOT_SET, GENRES_NOT_SET, TITLE_NOT_SET } from '../../../constants/textMessages';

const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
`;

const Paragraph = styled.div`
  margin: 0;
`;

const DescContent = ({ title, genres, releaseDate }) => (
  <DescContainer>
    <div>
      <Title size="20px" content={title || TITLE_NOT_SET} />
      <Paragraph>{genres || GENRES_NOT_SET}</Paragraph>
    </div>
    <div>
      {releaseDate ? new Date(releaseDate).getFullYear() : DATE_NOT_SET}
    </div>
  </DescContainer>
);

DescContent.propTypes = {
  title: string.isRequired,
  genres: string,
  releaseDate: string.isRequired,
};

DescContent.defaultProps = {
  genres: 'No genres set',
};

export default DescContent;
