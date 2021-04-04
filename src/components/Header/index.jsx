import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Title from '@components/Title';
import Input from '@components/Input';

import LogoImage from '@assets/images/logo.svg';
import { Form, Formik } from 'formik';

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
  margin: 0 20px;
`;

const Header = ({ onClick }) => {
  const submit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <TopContent>
        <Logo src={LogoImage} />
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
            initialValues={{ search: '' }}
            onSubmit={submit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Input
                  name="search"
                  placeholder="What do you want?"
                  opacity={0.9}
                />
                <ButtonWrapper>
                  <Button text="search" width="200px" type="submit" disabled={isSubmitting} />
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
