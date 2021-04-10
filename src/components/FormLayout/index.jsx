import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Title from '@components/Title';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

const FormLayout = ({ title, children }) => (
  <StyledForm>
    <TitleWrapper>
      <Title content={title} size="30px" uppercase />
    </TitleWrapper>
    {children}
  </StyledForm>
);

FormLayout.propTypes = {
  title: string,
  children: node.isRequired,
};

FormLayout.defaultProps = {
  title: '',
};

export default FormLayout;
