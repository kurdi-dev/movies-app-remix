import React, { useState } from 'react';
import { useLoaderData } from 'remix';
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
      <MoviesSlider moviesData={data['Trending']} />
      <MoviesRow
        title='From Netflix'
        moviesData={data.TvsNetflix}
        type='netflix'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Action Movies'
        moviesData={data.Action}
        genre='movies'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Adventure Movies'
        moviesData={data.Adventure}
        genre='adventure'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Science Fiction Movies'
        moviesData={data.ScienceFiction}
        genre='science_fiction'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Comedy Movies'
        moviesData={data.Comedy}
        genre='comedy'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Fantasy Movies'
        moviesData={data.Fantasy}
        genre='fantasy'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Horror Movies'
        moviesData={data.Fantasy}
        genre='horror'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Thriller Movies'
        moviesData={data.Thriller}
        genre='thriller'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Animation Movies'
        moviesData={data.Animation}
        genre='animation'
        type='movies'
        showMovieInfoDrawer={handleShowInfo}
      />
      <MoviesRow
        title='Family Movies'
        moviesData={data.Family}
        genre='family'
        type='movies'
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
