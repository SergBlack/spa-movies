import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import styled, { ThemeContext } from 'styled-components';

import { addMovie, loadMovies } from '@/redux/actions/movieActions';
import useQuery from '@hooks/useQuery';
import useModal from '@hooks/useModal';
import MovieForm from '@forms/MovieForm';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '@components/Input';
import Modal from '@components/Modal';

import LogoImage from '@assets/images/logo.svg';

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
  max-width: 800px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  margin: 10px 20px;
`;

const FormStyles = {
  display: 'flex',
  flex: '1 1 auto',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
};

const Header = () => {
  const [currentSearch, setCurrentSearch] = useQuery(useState({}));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const { isOpen, toggle } = useModal();
  const { mainColors } = useContext(ThemeContext);

  useEffect(() => {
    if (query.get('search')) {
      dispatch(loadMovies(query.toString()));
    }
  }, [dispatch, query]);

  const onSearchSubmit = (values) => {
    if (values.searchValue) {
      setCurrentSearch(
        { ...currentSearch, search: values.searchValue, searchBy: 'title' },
        'search',
      );
    }
  };

  const setMovieAfterSave = (id) => {
    toggle();
    history.push(`/film/${id}`);
    dispatch(loadMovies());
  };

  const onAddMovieSubmit = (values, { setSubmitting, setStatus }) => {
    dispatch(addMovie(values, (id) => setMovieAfterSave(id), (status) => setStatus(status)));
    setSubmitting(false);
  };

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <>
      <TopContent>
        <Logo src={LogoImage} onClick={onLogoClick} />
        <Button
          text="+ add movie"
          color="gray"
          opacity={0.9}
          onClick={toggle}
        />
      </TopContent>

      <MainContent>
        <Title content="find your movie" uppercase />
        <SearchWrapper>
          <Formik
            initialValues={{ searchValue: '' }}
            onSubmit={onSearchSubmit}
          >
            {() => (
              <Form style={FormStyles}>
                <Input
                  name="searchValue"
                  placeholder="What do you want to watch?"
                  opacity={0.9}
                />
                <ButtonWrapper>
                  <Button text="search" width="200px" type="submit" />
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
        </SearchWrapper>
      </MainContent>

      <Modal isOpen={isOpen} toggle={toggle} color={mainColors.dark}>
        <MovieForm formTitle="add movie" onSubmit={onAddMovieSubmit} />
      </Modal>
    </>
  );
};

export default Header;
