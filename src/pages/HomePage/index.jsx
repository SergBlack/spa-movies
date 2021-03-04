import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import useModal from '../../hooks/useModal';

const HomePage = () => {
  const { isOpen, close, open } = useModal();
  const { mainColors } = useContext(ThemeContext);

  return (
    <>
      <Header addMovie={open} />
      <Main />
      <Footer />
      <Modal isOpen={isOpen} close={close} color={mainColors.dark}>
        Form
      </Modal>
    </>
  );
};

export default HomePage;
