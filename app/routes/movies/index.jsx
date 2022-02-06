import React, { useState } from 'react';
import { useLoaderData, useFetcher, redirect, useNavigate } from 'remix';
import { getAllMovies } from '../../src/utils/fetcher';
import movieGenres from '../../src/shared/movieGenres';
import MovieDetailDrawer from '../../src/components/MovieDetailDrawer';
import MoviesGrid from '../../src/components/MoviesGrid';
import { Box, Typography, Chip, Pagination } from '@mui/material';

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let genre = url.searchParams.get('genre');
  if (!genre) {
    genre = 'trending';
  }
  let page = url.searchParams.get('page');
  if (!page) {
    page = 1;
  }
  // incase the genre parameter is not in the genre list
  if (!Object.keys(movieGenres).includes(genre) || page > 1000) {
    throw new Response('Not Found', { status: 404 });
  }

  const moviesData = await getAllMovies(genre, page);
  if (!moviesData) {
    // we know we can't render the component
    // so throw immediately to stop executing code
    // and show the not found page
    throw new Response('Not Found', { status: 404 });
  }
  return {
    moviesData,
    page: parseInt(page),
    genre,
    allGenres: Object.keys(movieGenres),
  };
};

// https://remix.run/api/conventions#meta
export const meta = () => {
  return {
    title: 'Movies | MOVIX',
    description: 'Welcome to Movix, A Remix Movie App!',
  };
};

export default function Movies() {
  const { moviesData, page, genre, allGenres } = useLoaderData();

  const [showInfo, setShowInfo] = useState(false);
  const [movieInfoData, setMovieInfoData] = useState(null);
  const navigate = useNavigate();

  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  const handleGenreChange = (selectedGenre) => {
    navigate(`/movies?genre=${selectedGenre}&page=${page}`);
  };
  const handlePageChange = (event, value) => {
    navigate(`/movies?genre=${genre}&page=${value}`);
  };
  const genreChips = allGenres.map((title) => (
    <Chip
      style={{ marginTop: 5, marginRight: 3 }}
      key={title}
      label={title.charAt(0).toUpperCase() + title.slice(1).replace('_', ' ')}
      color={title == genre ? 'primary' : 'default'}
      variant='outlined'
      onClick={() => handleGenreChange(title)}
    />
  ));

  return (
    <React.Fragment>
      <Box>
        <Box paddingY={3}>
          <Typography
            variant='h6'
            sx={{ mb: 2, width: '100%', textAlign: 'center' }}
          >
            Explore Movies
          </Typography>
          <Box display='flex' flexWrap='wrap'>
            {genreChips}
          </Box>
        </Box>
        <MoviesGrid movies={moviesData} showMovieInfoDrawer={handleShowInfo} />
        <Box display='flex' paddingY={5} justifyContent='center'>
          <Pagination
            count={1000}
            color='primary'
            shape='rounded'
            variant='outlined'
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
      <MovieDetailDrawer
        movieData={movieInfoData}
        show={showInfo}
        handeCloseInfo={handeCloseInfo}
      />
    </React.Fragment>
  );
}
