import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Button from '../Button';

import CloseIcon from '../../assets/images/close.svg';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100vw;
  height: 100vh;
  background-color: ${({ color }) => color};
  opacity: 0.8;
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const StyledModal = styled.div`
  z-index: 10;
  background-color: ${({ color }) => color};
  position: relative;
  margin: 200px auto;
  border-radius: 3px;
  max-width: 600px;
  min-height: 300px;
  padding: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = ({
  isOpen,
  close,
  color,
  children,
}) => (
  isOpen
    ? createPortal(
      <>
        <StyledOverlay color={color} />
        <StyledWrapper>
          <StyledModal color={color}>
            <StyledModalHeader>
              {close && (
                <Button
                  icon={CloseIcon}
                  onClick={close}
                  height="35px"
                  width="35px"
                  color="dark"
                />
              )}
            </StyledModalHeader>
            <StyledModalBody>{children}</StyledModalBody>
          </StyledModal>
        </StyledWrapper>
      </>,
      document.getElementById('modal-root'),
    )
    : null
);

export default Modal;
