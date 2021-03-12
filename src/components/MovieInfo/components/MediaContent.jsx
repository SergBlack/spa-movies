import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import NotFound from '../../../assets/images/not-found.png';

const ImageWrapper = styled.div`
`;

const Image = styled.img`
  height: 320px;
`;

const MediaContent = ({ posterPath }) => (
  <ImageWrapper>
    <Image src={posterPath || NotFound} alt="Poster" />
  </ImageWrapper>
);

MediaContent.propTypes = {
  posterPath: string,
};

MediaContent.defaultProps = {
  posterPath: '',
};

export default MediaContent;
