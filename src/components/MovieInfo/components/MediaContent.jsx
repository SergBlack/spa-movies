import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Image from '@components/Img';

const ImageWrapper = styled.div`
  display: flex;
  height: 320px;
  flex: 1 0 210px;
`;

const MediaContent = ({ posterPath }) => (
  <ImageWrapper>
    <Image posterPath={posterPath} />
  </ImageWrapper>
);

MediaContent.propTypes = {
  posterPath: string,
};

MediaContent.defaultProps = {
  posterPath: '',
};

export default MediaContent;
