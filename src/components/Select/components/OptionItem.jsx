import React from 'react';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 16px;
  height: 36px;
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const StyledCheckbox = styled.input`
  margin-right: 16px;
`;

const OptionItem = ({ item, selected, onChange }) => (
  <OptionContainer>
    <StyledCheckbox
      type="checkbox"
      checked={selected}
      onChange={() => onChange(item)}
    />
    <StyledOption
      key={item}
      value={item}
    >
      {item}
    </StyledOption>
  </OptionContainer>
);

OptionItem.propTypes = {
  item: string.isRequired,
  selected: bool.isRequired,
  onChange: func.isRequired,
};

export default OptionItem;
