import {
  Typography,
  LinearProgress,
  Button,
  Divider,
  Box,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper components
SwiperCore.use([Navigation]);

const image_base_url = 'https://image.tmdb.org/t/p/original';

export default function MoviesRow({
  title,
  moviesData,
  genre,
  type,
  showMovieInfoDrawer,
  similar,
}) {
  const seeAllClickHandle = () => {
    if (type == 'netflix') {
      console.log({
        pathname: `/tv`,
      });
    } else {
      console.log({
        pathname: `/${type}`,
        query: { genre: `${genre}` },
      });
    }
  };

  const swiperItems = moviesData
    ? moviesData.map((movie) => (
        <SwiperSlide
          key={movie.id}
          style={{
            maxWidth: 180,
          }}
          onClick={() => showMovieInfoDrawer(movie)}
        >
          <Box
            sx={{
              transition: 'transform 450ms',
              ':hover': {
                transform: 'scale(1.07)',
                opacity: 1,
              },
              display: 'flex',
              flexDirection: 'column',
              pb: 1,
            }}
          >
            <img
              src={image_base_url + movie.poster_path}
              alt={movie.title}
              sx={{ objectFit: 'contain', width: '100%' }}
              className={'swiper-lazy'}
            />

            <Typography
              sx={{ textAlign: 'center', color: 'text.primary', mt: 1 }}
              variant='subtitle2'
              color='initial'
            >
              {movie?.title || movie?.name || movie?.original_name}
            </Typography>
          </Box>
        </SwiperSlide>
      ))
    : null;

  return (
    <Box sx={{ backgroundColor: '#121212' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography
          sx={{ fontSize: 18, color: 'text.primary' }}
          variant='body1'
          color='initial'
          display='inline'
          component='h2'
        >
          {title}
        </Typography>
        {!similar && (
          <Button
            size='medium'
            variant='text'
            color='primary'
            onClick={seeAllClickHandle}
            endIcon={<ArrowForwardIcon />}
          >
            See all
          </Button>
        )}
      </Box>

      <Box
        sx={{
          width: '100%',
          minHeight: 320,
          py: 2,
          overflow: 'hidden',
        }}
      >
        <Swiper
          navigation={true} //TODO: only show it in mobile
          spaceBetween={18}
          slidesPerView='auto'
          watchSlidesVisibility
        >
          {swiperItems}
        </Swiper>
      </Box>
      <Divider variant='fullWidth' light />
    </Box>
  );
}