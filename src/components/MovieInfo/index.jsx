import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
  func,
} from 'prop-types';
import styled from 'styled-components';

import Logo from '../Logo';
import Button from '../Button';
import TextContent from './components/TextContent';
import MediaContent from './components/MediaContent';

import LogoImage from '../../assets/images/logo.svg';
import SearchIcon from '../../assets/images/search.svg';

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

const MovieInfo = ({ selected, onClick }) => (
  <StyledMovieInfo>
    <TopContent>
      <Logo src={LogoImage} />
      <Button
        icon={SearchIcon}
        transparent
        width="60px"
        shape="circle"
        onClick={onClick}
      />
    </TopContent>

    <MainContent>
      <MediaContent posterPath={selected.poster_path} />
      <TextContent
        title={selected.title}
        voteAverage={selected.vote_average}
        tagline={selected.tagline}
        releaseDate={selected.release_date}
        runtime={selected.runtime}
        overview={selected.overview}
      />
    </MainContent>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  selected: shape({
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: arrayOf(string),
    runtime: number,
  }),
  onClick: func.isRequired,
};

MovieInfo.defaultProps = {
  selected: {},
};

export default MovieInfo;
