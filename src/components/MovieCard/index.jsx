import React, { useContext, useState } from 'react';
import { string } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import MediaContent from './components/MediaContent';
import DescContent from './components/DescContent';
import Modal from '../Modal';
import EditMovieForm from '../../forms/EditMovieForm';
import DeleteMovieForm from '../../forms/DeleteMovieForm';

import useModal from '../../hooks/useModal';

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
  width: calc(1/5 * 100% - 32px);
  
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  
  @media screen and (max-width: 1920px) {
    width: calc(1/4 * 100% - 32px);
  }

  @media screen and (max-width: 1440px) {
    width: calc(1/3 * 100% - 32px);
  }

  @media screen and (max-width: 1200px) {
    width: calc(1/2 * 100% - 32px);
  }

  @media screen and (max-width: 800px) {
    width: calc(100% - 32px);
  }
`;

const MovieCard = ({
  posterPath,
  title,
  releaseDate,
  genres,
}) => {
  const [isShowCardDetails, setShowCardDetails] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const { isOpen, open, close } = useModal();
  const { mainColors } = useContext(ThemeContext);

  const onOpenDetailsClick = () => {
    setShowCardDetails(true);
  };

  const onCloseDetailsClick = () => {
    setShowCardDetails(false);
  };

  const onMouseEnterCard = () => {
    setIsHover(true);
  };

  const onMouseLeaveCard = () => {
    setIsHover(false);
    setShowCardDetails(false);
  };

  const onEditBtnClick = () => {
    setCurrentModal('edit');
    open();
  };

  const onDeleteBtnClick = () => {
    setCurrentModal('delete');
    open();
  };

  const onCloseModalClick = () => {
    setCurrentModal(null);
    close();
  };

  return (
    <StyledMovieCard
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
    >
      <MediaContent
        posterPath={posterPath}
        isHover={isHover}
        isShowCardDetails={isShowCardDetails}
        onOpenDetailsClick={onOpenDetailsClick}
        onCloseDetailsClick={onCloseDetailsClick}
        onEditBtnClick={onEditBtnClick}
        onDeleteBtnClick={onDeleteBtnClick}
      />
      <DescContent
        title={title}
        releaseDate={releaseDate}
        genres={genres}
      />
      <Modal isOpen={isOpen} close={onCloseModalClick} color={mainColors.dark}>
        {currentModal === 'edit' && <EditMovieForm formTitle="edit movie" />}
        {currentModal === 'delete' && <DeleteMovieForm formTitle="delete movie" />}
      </Modal>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  posterPath: string,
  title: string,
  releaseDate: string,
  genres: string,
};

MovieCard.defaultProps = {
  posterPath: '',
  title: '',
  releaseDate: '',
  genres: '',
};

export default MovieCard;
