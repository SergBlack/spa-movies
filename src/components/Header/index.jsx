import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { func } from 'prop-types';
import styled from 'styled-components';

import { loadMovies } from '@/redux/actions/movieActions';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '@components/Input';

import LogoImage from '@assets/images/logo.svg';
import useQuery from '@hooks/useQuery';

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

const Header = ({ onClick }) => {
  const [currentSearch, setCurrentSearch] = useQuery(useState({}));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  useEffect(() => {
    if (query.get('search')) {
      dispatch(loadMovies(query.toString()));
    }
  }, [dispatch, query]);

  const submit = (values) => {
    if (values.searchValue) {
      setCurrentSearch(
        { ...currentSearch, search: values.searchValue, searchBy: 'title' },
        'search',
      );
    }
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
          onClick={onClick}
        />
      </TopContent>

      <MainContent>
        <Title content="find your movie" uppercase />
        <SearchWrapper>
          <Formik
            initialValues={{ searchValue: '' }}
            onSubmit={submit}
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
    </>
  );
};

Header.propTypes = {
  onClick: func.isRequired,
};

export default Header;
