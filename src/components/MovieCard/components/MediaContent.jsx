import React from 'react';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';

import Button from '../../Button';
import Dropdown from '../../Dropdown';

import DetailsIcon from '../../../assets/images/details.svg';
import CloseIcon from '../../../assets/images/close.svg';
import NotFound from '../../../assets/images/not-found.png';

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const MediaContent = ({
  posterPath,
  isHover,
  isShowCardDetails,
  onOpenDetailsClick,
  onCloseDetailsClick,
  onEditBtnClick,
  onDeleteBtnClick,
}) => (
  <ImageContainer>
    <Image src={posterPath || NotFound} alt="Poster" />
    {isHover && (
      <ButtonWrapper>
        <Button
          icon={DetailsIcon}
          height="40px"
          width="40px"
          color="dark"
          type="circle"
          onClick={onOpenDetailsClick}
        />
      </ButtonWrapper>
    )}
    {isShowCardDetails && (
      <Dropdown>
        <Button
          icon={CloseIcon}
          onClick={onCloseDetailsClick}
          height="30px"
          width="30px"
          color="dark"
        />
        <Button text="edit" width="100%" height="40px" color="dark" onClick={onEditBtnClick} />
        <Button text="delete" width="100%" height="40px" color="dark" onClick={onDeleteBtnClick} />
      </Dropdown>
    )}
  </ImageContainer>
);

MediaContent.propTypes = {
  posterPath: string,
  isHover: bool.isRequired,
  isShowCardDetails: bool.isRequired,
  onOpenDetailsClick: func.isRequired,
  onCloseDetailsClick: func.isRequired,
  onEditBtnClick: func.isRequired,
  onDeleteBtnClick: func.isRequired,
};

MediaContent.defaultProps = {
  posterPath: '',
};

export default MediaContent;
