import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Title from '../Title';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Form = ({ title, children }) => (
  <StyledForm>
    <TitleContainer>
      <Title content={title} size="30px" uppercase />
    </TitleContainer>
    {children}
  </StyledForm>
);

Form.propTypes = {
  title: string,
  children: node.isRequired,
};

Form.defaultProps = {
  title: '',
};

export default Form;
