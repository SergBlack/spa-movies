import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Title from '../../Title';

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
      <Title size="20px" content={title || 'No title set'} />
      <Paragraph>{genres || 'No genres set'}</Paragraph>
    </div>
    <div>
      {releaseDate ? new Date(releaseDate).getFullYear() : 'N/A'}
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
