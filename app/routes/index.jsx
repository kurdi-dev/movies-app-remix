import * as React from 'react';
import { Link, useLoaderData } from 'remix';
import Typography from '@mui/material/Typography';
import { getAllData } from '../src/utils/fetcher';
import MoviesSlider from '../src/components/MoviesSlider';
import MoviesRow from '../src/components/MoviesRow';

export const loader = async () => {
  return getAllData();
};

// https://remix.run/api/conventions#meta
export const meta = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData();
  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  return (
    <React.Fragment>
      {data && <MoviesSlider moviesData={data['Trending'].results} />}
      {data && (
        <MoviesRow
          title='From Netflix'
          moviesData={data.TvsNetflix.results}
          type='netflix'
          showMovieInfoDrawer={handleShowInfo}
        />
      )}
    </React.Fragment>
  );
}
