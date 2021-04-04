import React, { useContext } from 'react';
import { string, bool } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Field, useField } from 'formik';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const OptionItem = ({
  item,
  multiple,
  ...props
}) => {
  const { mainColors, shadesMainColors } = useContext(ThemeContext);
  const [field] = useField(props);

  return (
    <OptionWrapper
      hoverColor={mainColors.red}
      activeColor={shadesMainColors.red}
      multiple={multiple}
      selected={field.value.includes(item)}
    >
      {multiple && (
        <Field
          type="checkbox"
          name={field.name}
          value={item}
          style={{ marginRight: '16px' }}
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
  multiple: bool.isRequired,
};

export default OptionItem;
