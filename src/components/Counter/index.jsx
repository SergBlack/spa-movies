import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

const StyledCounter = styled.div`
  margin: 16px 48px;
  font-size: 24px;
`;

const Counter = ({ count, text }) => (
  <StyledCounter>
    <strong>{count}</strong>
    {' '}
    <span>{text}</span>
  </StyledCounter>
);

Counter.propTypes = {
  count: number.isRequired,
  text: string.isRequired,
};

export default Counter;
