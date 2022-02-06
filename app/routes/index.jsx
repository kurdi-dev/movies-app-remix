import React, { useState } from 'react';
import { Link, useLoaderData } from 'remix';
import Typography from '@mui/material/Typography';
import { getAllData } from '../src/utils/fetcher';
import MoviesSlider from '../src/components/MoviesSlider';
import MoviesRow from '../src/components/MoviesRow';
import MovieDetailDrawer from '../src/components/MovieDetailDrawer';

export const loader = async () => {
  return getAllData();
};

// https://remix.run/api/conventions#meta
export const meta = () => {
  return {
    title: 'Home | MOVIX',
    description: 'Welcome to Movix, A Remix Movie App!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData();
  const [showInfo, setShowInfo] = useState(false);
  const [movieInfoData, setMovieInfoData] = useState(null);
  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  if (!data) {
    return <h2>Loading...</h2>;
  }
  return (
    <React.Fragment>
      <MoviesSlider moviesData={data['Trending'].results} />
      <MoviesRow
        title='From Netflix'
        moviesData={data.TvsNetflix.results}
        type='netflix'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MovieDetailDrawer
        movieData={movieInfoData}
        show={showInfo}
        handeCloseInfo={handeCloseInfo}
      />
    </React.Fragment>
  );
}
