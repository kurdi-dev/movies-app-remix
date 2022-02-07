import React, { useState, useEffect } from 'react';
import { Typography, LinearProgress, Divider, Box } from '@mui/material';

// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper components
SwiperCore.use([Navigation]);

const image_base_url = 'https://image.tmdb.org/t/p/original';
const no_picture = '/no-photo.jpg';

export default function ActorsRow({ actorsData }) {
  const classes = '';

  const swiperItems = actorsData.map((actor) => (
    <SwiperSlide
      key={actor.id}
      style={{
        maxWidth: 200,
      }}
    >
      <Box
        sx={{
          transition: 'transform 450ms',
          '&:hover': {
            transform: 'scale(1.07)',
            opacity: 1,
          },
          pb: 2,
        }}
      >
        <Box
          component='img'
          src={
            actor.profile_path
              ? image_base_url + actor.profile_path
              : no_picture
          }
          alt={actor.name}
          className='swiper-lazy'
          sx={{ objectFit: 'contain', width: '100%', height: 240 }}
        />
        <Box width='100%' textAlign='center'>
          <Typography variant='subtitle2' color='text.primary'>
            {actor.name}
          </Typography>
          <Typography variant='caption' color='text.primary'>
            {`As ${actor.character}`}
          </Typography>
        </Box>
      </Box>
    </SwiperSlide>
  ));

  return (
    <Box sx={{ py: 4, backgroundColor: '#121212' }}>
      <Box display='flex' justifyContent='flex-start' mb={2}>
        <Typography
          variant='button'
          color='primary'
          display='inline'
          component='h2'
          sx={{ fontSize: 18 }}
        >
          Actors
        </Typography>
      </Box>
      <Box overflow='hidden'>
        <Swiper
          navigation={true}
          spaceBetween={1}
          slidesPerView='auto'
          watchSlidesVisibility
          className={classes.swiper_container}
        >
          {swiperItems}
        </Swiper>
      </Box>

      <Divider variant='fullWidth' light sx={{ mt: 2 }} />
    </Box>
  );
}
