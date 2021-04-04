import React, { useContext } from 'react';
import { arrayOf, string, bool } from 'prop-types';
import { useField } from 'formik';
import styled, { ThemeContext } from 'styled-components';

import OptionItem from './OptionItem';

const StyledOptionList = styled.div`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.30);
  padding: 0;
  margin-top: 3px;
  max-height: 180px;
  overflow-y: ${({ isScrollable }) => (isScrollable ? 'scroll' : '')} ;
`;

const OptionList = ({
  optionList,
  listBgColor,
  textColor,
  multiple,
  ...props
}) => {
  const { mainColors } = useContext(ThemeContext);
  const [field] = useField(props);

  return (
    <StyledOptionList
      bgColor={mainColors[listBgColor]}
      color={mainColors[textColor]}
      isScrollable={optionList.length >= 5}
      role={multiple ? 'group' : ''}
      aria-labelledby={multiple ? `${field.name}-group` : ''}
    >
      {optionList.map((item) => (
        <OptionItem
          key={item}
          item={item}
          multiple={multiple}
          {...field}
        />
      ))}
    </StyledOptionList>
  );
};

OptionList.propTypes = {
  optionList: arrayOf(string).isRequired,
  listBgColor: string,
  textColor: string,
  multiple: bool,
};

OptionList.defaultProps = {
  listBgColor: 'dark',
  textColor: 'light',
  multiple: false,
};

export default OptionList;
