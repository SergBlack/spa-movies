import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { selectSelectedMovie, selectIsLoadingSelectedMovie } from '@/redux/selectors';
import { loadSelectedMovie } from '@/redux/actions/movieActions';

import Logo from '@components/Logo';
import Button from '@components/Button';
import TextContent from '@components/MovieInfo/components/TextContent';
import MediaContent from '@components/MovieInfo/components/MediaContent';

import LogoImage from '@assets/images/logo.svg';
import SearchIcon from '@assets/images/search.svg';

const StyledMovieInfo = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const MainContent = styled.div`
  display: flex;
  height: 350px;
  padding: 0 30px;
`;

const MovieInfo = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(selectSelectedMovie);
  const isLoadingSelectedMovie = useSelector(selectIsLoadingSelectedMovie);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadSelectedMovie(id));
  }, [dispatch, id]);

  const onSearchButtonClick = () => {
    history.push('/');
  };

  return (
    <>
      {isLoadingSelectedMovie
        ? <div>Loading...</div>
        : (
          <StyledMovieInfo>
            <TopContent>
              <Logo src={LogoImage} />
              <Button
                icon={SearchIcon}
                transparent
                width="60px"
                shape="circle"
                onClick={onSearchButtonClick}
              />
            </TopContent>

            <MainContent>
              <MediaContent posterPath={selectedMovie.poster_path} />
              <TextContent
                title={selectedMovie.title}
                voteAverage={selectedMovie.vote_average}
                tagline={selectedMovie.tagline}
                releaseDate={selectedMovie.release_date}
                runtime={selectedMovie.runtime}
                overview={selectedMovie.overview}
              />
            </MainContent>
          </StyledMovieInfo>
        )}
    </>
  );
};

export default MovieInfo;
