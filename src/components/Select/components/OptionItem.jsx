import React, { useContext } from 'react';
import { string, bool } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Field, useField } from 'formik';

const StyledOption = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  flex: 1 1 auto;
  font-size: 18px;
  background-color:
          ${({ activeColor, multiple, selected }) => (!multiple && selected) && activeColor};

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    cursor: pointer;
  }
`;

const OptionItem = ({
  item,
  multiple,
  ...props
}) => {
  const { mainColors, shadesMainColors } = useContext(ThemeContext);
  const [field] = useField(props);

  return (
    <StyledOption
      value={item}
      multiple={multiple}
      selected={field.value.includes(item)}
      hoverColor={mainColors.red}
      activeColor={shadesMainColors.red}
    >
      <Field
        type={multiple ? 'checkbox' : 'radio'}
        name={field.name}
        value={item}
        style={{ marginRight: '16px', appearance: multiple ? '' : 'none' }}
      />
      {item}
    </StyledOption>
  );
};

OptionItem.propTypes = {
  item: string.isRequired,
  multiple: bool.isRequired,
};

export default OptionItem;
