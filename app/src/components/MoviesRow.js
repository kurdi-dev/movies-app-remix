import { Typography, Button, Divider, Box } from '@mui/material';
import { useNavigate } from 'remix';

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
  const navigate = useNavigate();
  const seeAllClickHandle = () => {
    if (type == 'netflix') {
      navigate('/tv');
    } else {
      navigate(`/${type}?genre=${genre}`);
    }
  };

  const swiperItems = moviesData.map((movie) => (
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
  ));

  return (
    <Box sx={{ backgroundColor: '#121212' }}>
      <Box display='flex' justifyContent='space-between' mb={1}>
        <Typography
          sx={{ fontSize: 18 }}
          variant='button'
          color='primary'
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
          pb: 2,
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
      <Divider variant='fullWidth' sx={{ mb: 2 }} light />
    </Box>
  );
}
