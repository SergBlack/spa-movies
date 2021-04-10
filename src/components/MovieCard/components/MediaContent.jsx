import React from 'react';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';

import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Image from '@components/Img';

import DetailsIcon from '@assets/images/details.svg';
import CloseIcon from '@assets/images/close.svg';

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  width: 80%;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

const MediaContent = ({
  posterPath,
  isHover,
  isShowCardDetails,
  onOpenDetailsClick,
  onCloseDetailsClick,
  onClick,
}) => (
  <ImageWrapper>
    <Image posterPath={posterPath} />
    {isHover && !isShowCardDetails && (
      <ButtonWrapper>
        <Button
          icon={DetailsIcon}
          height="40px"
          width="40px"
          color="dark"
          shape="circle"
          onClick={onOpenDetailsClick}
        />
      </ButtonWrapper>
    )}
    <DropdownWrapper>
      {isShowCardDetails && (
        <Dropdown>
          <Button
            icon={CloseIcon}
            onClick={onCloseDetailsClick}
            height="30px"
            width="30px"
            color="dark"
          />
          <Button
            text="edit"
            width="100%"
            height="40px"
            color="dark"
            onClick={(e) => onClick(e, 'edit')}
          />
          <Button
            text="delete"
            width="100%"
            height="40px"
            color="dark"
            onClick={(e) => onClick(e, 'delete')}
          />
        </Dropdown>
      )}
    </DropdownWrapper>
  </ImageWrapper>
);

MediaContent.propTypes = {
  posterPath: string,
  isHover: bool.isRequired,
  isShowCardDetails: bool.isRequired,
  onOpenDetailsClick: func.isRequired,
  onCloseDetailsClick: func.isRequired,
  onClick: func.isRequired,
};

MediaContent.defaultProps = {
  posterPath: '',
};

export default MediaContent;
