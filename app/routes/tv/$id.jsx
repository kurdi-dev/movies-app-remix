import React, { useState } from 'react';
import { useLoaderData } from 'remix';
import { getSingleTv } from '../../src/utils/fetcher';
import HeroImage from '../../src/components/HeroImage';
import MoviesRow from '../../src/components/MoviesRow';
import ActorsRow from '../../src/components/ActorsRow';
import ShowDetail from '../../src/components/ShowDetail';
import MovieDetailDrawer from '../../src/components/MovieDetailDrawer';
import SeasonsDetail from '../../src/components/SeasonsDetail';

export const loader = async ({ params }) => {
  const tv_id = parseInt(params.id);
  if (!Number.isInteger(tv_id)) {
    throw new Response('Not Found', { status: 404 });
  }
  const data = getSingleTv(tv_id);
  if (!data) {
    throw new Response('Not Found', { status: 404 });
  }

  return data;
};
export default function tvPage() {
  const { tvData, seasons } = useLoaderData();
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
      <HeroImage image={tvData.backdrop_path} />
      <ShowDetail showData={tvData} />
      <ActorsRow actorsData={tvData.credits.cast.slice(0, 30)} />
      {seasons.length > 0 && <SeasonsDetail seasonData={seasons} />}
      {tvData?.similar?.results.length > 0 && (
        <MoviesRow
          title='Related Shows'
          moviesData={tvData.similar.results}
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
