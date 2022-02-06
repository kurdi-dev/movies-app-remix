// import Swiper core and required components
import { Box, Typography, Button, LinearProgress } from '@mui/material';

// import Swiper core and required components
import SwiperCore, { Pagination, EffectCube, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'remix';

// // install Swiper components
SwiperCore.use([Pagination, EffectCube, Autoplay]);

const image_base_url = 'https://image.tmdb.org/t/p/original';

export default function MoviesSlider({ moviesData }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const sliderItems = moviesData
    ? moviesData.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Box
            sx={{
              objectFit: 'contain',
              minHeight: { xs: 420, md: 450, lg: 480 },
              backgroundSize: 'cover',
              backgroundImage: `url(${image_base_url}${movie.backdrop_path})`,
              backgroundPosition: 'center center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage:
                  'linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  bottom: 0,
                  p: 2,
                  pr: 4,
                }}
              >
                <Typography sx={{ fontSize: { xs: 24, md: 38 } }} variant='h2'>
                  {movie?.title || movie?.name || movie?.original_nam}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, md: 18 } }}
                  variant='subtitle1'
                >
                  {truncate(movie.overview, 150)}
                </Typography>
                <Box
                  display='flex'
                  justifyContent='flex-end'
                  width='full'
                  my={2}
                  mr={4}
                >
                  <Link
                    to={`/${movie.first_air_date ? 'tv' : 'movies'}/${
                      movie.id
                    }`}
                  >
                    <Button variant='outlined' color='primary' size='medium'>
                      Watch This
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))
    : null;

  return (
    <Box>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        watchSlidesVisibility
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {sliderItems}
      </Swiper>
    </Box>
  );
}
