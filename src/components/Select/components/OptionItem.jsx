import React, { useContext } from 'react';
import { string, bool, func } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 16px;
  height: 36px;
  background-color: 
          ${({ activeColor, multiple, selected }) => (!multiple && selected) && activeColor};
  
  :hover {
    background-color: ${({ hoverColor, multiple }) => !multiple && hoverColor};
    cursor: pointer;
  }
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const StyledCheckbox = styled.input`
  margin-right: 16px;
`;

const OptionItem = ({
  item,
  selected,
  onChange,
  onClose,
  multiple,
}) => {
  const { mainColors, shadesMainColors } = useContext(ThemeContext);

  const onClick = () => {
    onChange(item);
    if (!multiple) {
      onClose();
    }
  };

  return (
    <OptionWrapper
      hoverColor={mainColors.red}
      activeColor={shadesMainColors.red}
      multiple={multiple}
      selected={selected}
      onClick={onClick}
    >
      {multiple && (
        <StyledCheckbox
          type="checkbox"
          checked={selected}
          readOnly
        />
      )}
      <StyledOption
        key={item}
        value={item}
      >
        {item}
      </StyledOption>
    </OptionWrapper>
  );
};

OptionItem.propTypes = {
  item: string.isRequired,
  selected: bool.isRequired,
  onChange: func.isRequired,
  onClose: func.isRequired,
  multiple: bool.isRequired,
};

export default OptionItem;
