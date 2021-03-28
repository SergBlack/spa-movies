import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import NotFound from '@assets/images/not-found.png';

const StyledImage = styled.img`
  width: 100%;
`;

const Image = ({ posterPath }) => {
  const onError = (e) => {
    e.target.src = NotFound;
  };

  return <StyledImage src={posterPath} alt="Poster" onError={onError} />;
};

Image.propTypes = {
  posterPath: string,
};

Image.defaultProps = {
  posterPath: '',
};

export default Image;
