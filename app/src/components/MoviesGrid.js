import { Typography, Box } from '@mui/material';
const image_base_url = 'https://image.tmdb.org/t/p/original';
export default function MoviesGrid({ movies, showMovieInfoDrawer }) {
  return (
    <Box
      width='100%'
      display='flex'
      flexWrap='wrap'
      flexDirection='row'
      justifyContent='center'
      py={1}
    >
      {movies.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            my: 2,
            mx: 2,
            maxWidth: 170,
            transition: 'transform 450ms',
            ':hover': {
              transform: 'scale(1.07)',
              opacity: 1,
            },
          }}
          onClick={() => showMovieInfoDrawer(movie)}
        >
          <Box
            component='img'
            sx={{ objectFit: 'contain', width: '100%', height: 240 }}
            src={image_base_url + movie.poster_path}
            alt={movie.title}
            className='swiper-lazy'
          />
          <Box display='flex' flexWrap='wrap'></Box>
          <Typography
            sx={{ color: 'text.main', textAlign: 'center' }}
            variant='subtitle2'
            color='initial'
          >
            {movie?.title || movie?.name || movie?.original_name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
