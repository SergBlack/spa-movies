import React, { useContext, useState } from 'react';
import { arrayOf, string, func } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import Dropdown from '@components/Dropdown';
import Button from '@components/Button';

import ArrowDown from '@assets/images/arrowDown.svg';
import ArrowUp from '@assets/images/arrowUp.svg';

const StyledSortPanel = styled.div`
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 250px;
  font-size: 18px;
  border-radius: 5px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const StyledSortText = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 16px;
  color: ${({ color }) => color};
`;

const DropdownWrapper = styled.div`
  position: absolute;
  width: 248px;
  top: 50px;
  right: 0;
  z-index: 20;
  border: 1px solid gray;
  border-radius: 5px;
`;

const StyledSort = styled.div`
  color: ${({ color }) => color};
  display: flex;
  margin-right: 16px;
`;

const StyledImage = styled.img`
  height: 30%;
  width: 8%;
  padding: 0 10px;
`;

const SortPanel = ({
  current,
  sortList,
  height,
  bgColor,
  textColor,
  onChange,
}) => {
  const [isShowSort, setShowSort] = useState(false);
  const { mainColors } = useContext(ThemeContext);

  const onClick = () => {
    setShowSort((prevValue) => !prevValue);
  };

  return (
    <>
      <StyledSortText color={mainColors[bgColor]}>SORT BY</StyledSortText>
      <StyledSortPanel onClick={onClick} height={height} bgColor={mainColors.gray}>
        <StyledSort color={mainColors[textColor]}>{current || 'Choose sort'}</StyledSort>
        {isShowSort && (
          <DropdownWrapper>
            <Dropdown>
              {sortList.map((sort) => (
                <Button
                  key={sort}
                  text={sort}
                  width="100%"
                  height="40px"
                  color="dark"
                  uppercase={false}
                  onClick={() => onChange(sort)}
                />
              ))}
              <Button
                text="Reset sort"
                width="100%"
                height="40px"
                color="dark"
                uppercase={false}
                onClick={() => onChange('')}
              />
            </Dropdown>
          </DropdownWrapper>
        )}
        <StyledImage
          src={isShowSort ? ArrowDown : ArrowUp}
          alt="arrow"
        />
      </StyledSortPanel>
    </>

  );
};

SortPanel.propTypes = {
  current: string,
  sortList: arrayOf(string),
  height: string,
  bgColor: string,
  textColor: string,
  onChange: func.isRequired,
};

SortPanel.defaultProps = {
  current: '',
  sortList: [],
  height: '50px',
  bgColor: 'darkGray',
  textColor: 'light',
};

export default SortPanel;
