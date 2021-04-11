import React from 'react';
import styled from 'styled-components';

import Title from '@components/Title';

const StyledNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0;
`;

const NotFoundPage = () => (
  <StyledNotFoundWrapper>
    <Title content="No Movie Found" size="36px" />
  </StyledNotFoundWrapper>
);

export default NotFoundPage;
