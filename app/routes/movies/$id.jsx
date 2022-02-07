import React, { useState } from 'react';
import { useLoaderData } from 'remix';
import ActorsRow from '../../src/components/ActorsRow';
import HeroImage from '../../src/components/HeroImage';
import MovieDetailDrawer from '../../src/components/MovieDetailDrawer';
import MoviesRow from '../../src/components/MoviesRow';
import ShowDetail from '../../src/components/ShowDetail';
import { getSingleMovie } from '../../src/utils/fetcher';

export const loader = async ({ params }) => {
  const movie_id = parseInt(params.id);
  if (!Number.isInteger(movie_id)) {
    throw new Response('Not Found', { status: 404 });
  }
  const movieData = getSingleMovie(movie_id);
  if (!movieData) {
    throw new Response('Not Found', { status: 404 });
  }
  return movieData;
};

export default function moviePage() {
  const movieData = useLoaderData();
  const [showInfo, setShowInfo] = useState(false);
  const [movieInfoData, setMovieInfoData] = useState(null);

  const handleShowInfo = (selectedMovieData) => {
    setMovieInfoData(selectedMovieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  return (
    <React.Fragment>
      <HeroImage image={movieData.backdrop_path} />
      <ShowDetail showData={movieData} />
      <ActorsRow actorsData={movieData.credits.cast.slice(0, 25)} />
      {movieData?.similar?.results.length > 0 && (
        <MoviesRow
          title='Related Movies'
          moviesData={movieData.similar.results}
          showMovieInfoDrawer={handleShowInfo}
          similar={true}
        />
      )}
      <MovieDetailDrawer
        movieData={movieInfoData}
        show={showInfo}
        handeCloseInfo={handeCloseInfo}
      />
    </React.Fragment>
  );
}
