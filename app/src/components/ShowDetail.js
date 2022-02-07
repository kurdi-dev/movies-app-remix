import React, { useState } from 'react';
import { Link } from 'remix';
import {
  Box,
  Typography,
  Chip,
  Button,
  Breadcrumbs,
  Rating,
} from '@mui/material';
import FsLightbox from 'fslightbox-react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
const image_base_url = 'https://image.tmdb.org/t/p/original';

export default function ShowDetail({ showData }) {
  const [showTrailer, setTrailerToggler] = useState(false);

  let directors = [];
  let writers = [];
  showData.credits.crew.forEach(function (entry) {
    switch (entry.job) {
      case 'Director':
        directors.push(entry.name);
        break;
      case 'Screenplay':
        writers.push(entry.name);
        break;
      case 'Story':
        writers.push(entry.name);
        break;
      default:
        break;
    }
  });
  let genreChips = [];
  showData.genres.forEach((genre) =>
    genreChips.push(
      <Chip
        key={genre.id}
        style={{ marginRight: 5 }}
        variant='outlined'
        color='default'
        clickable={false}
        size='small'
        label={`${genre.name}`}
      />
    )
  );

  return (
    <Box>
      <Box
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='space-evenly'
        sx={{ marginTop: -15, position: 'relative' }}
      >
        <Box
          component='img'
          src={image_base_url + showData.poster_path}
          alt={showData.title}
          sx={{
            objectFit: 'contain',
            width: '100%',
            height: { xs: 240, md: 280, lg: 300 },
          }}
        />

        <Box sx={{ width: '100%' }}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link to='/'>
              <Typography color='text.secondary' variant='caption'>
                Home
              </Typography>
            </Link>
            <Link to={showData.release_date ? '/movies' : '/tv'}>
              <Typography color='text.secondary' variant='caption'>
                {showData.release_date ? 'Movies' : 'Tv Series'}
              </Typography>
            </Link>
            <Typography color='text.secondary' variant='caption'>
              {showData?.title || showData?.name || showData?.original_name}
            </Typography>
          </Breadcrumbs>

          <Typography
            component='h1'
            color='primary'
            sx={{ mt: 2, fontSize: 20 }}
          >
            {showData?.title || showData?.name || showData?.original_name}
          </Typography>

          <Box display='flex' flexDirection='row' py={1}>
            <Rating
              name='read-only'
              value={showData.vote_average / 2}
              readOnly
            />

            <Box
              sx={{
                borderStyle: 'solid',
                borderColor: '#838383',
                borderWidth: 0.3,
                padding: 0.5,
                borderRadius: 1,
                marginLeft: 1,
              }}
            >
              <Typography variant='caption' color='primary' component='p'>
                {showData.vote_average}
              </Typography>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            flexWrap='wrap'
            paddingY={1}
            alignItems='center'
          >
            <Box display='flex' flexDirection='row' paddingY={1}>
              <DateRangeIcon color='primary' fontSize='small' />
              &nbsp;
              <Typography variant='caption' component='p'>
                {showData.release_date
                  ? showData.release_date
                  : showData.first_air_date}
              </Typography>
              &nbsp;&nbsp;&nbsp;
              {showData.revenue ? (
                <>
                  <AttachMoneyIcon fontSize='small' color='primary' />
                  <Typography variant='caption' component='p'>
                    {showData.revenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Typography>
                </>
              ) : null}
              &nbsp;&nbsp;&nbsp;
              {showData.runtime ? (
                <>
                  <QueryBuilderIcon fontSize='small' color='primary' />
                  &nbsp;
                  <Typography
                    variant='caption'
                    component='p'
                  >{`${showData.runtime} MIN`}</Typography>
                </>
              ) : null}
            </Box>
            <Box display='flex' flexDirection='row' paddingY={1}>
              <LocalOfferIcon fontSize='small' color='primary' />
              {genreChips}
            </Box>
          </Box>
          {showData.release_date ? (
            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              paddingY={1}
              alignItems='center'
            >
              <Box marginRight={3}>
                <Typography color='primary' variant='caption' component='p'>
                  Director:
                </Typography>
                <Typography component='p'>{directors.join(', ')}</Typography>
              </Box>
              {writers.length > 0 && (
                <Box>
                  <Typography color='primary' variant='caption' component='p'>
                    Writer:
                  </Typography>
                  <Typography component='p'>{writers.join(', ')}</Typography>
                </Box>
              )}
            </Box>
          ) : null}
          <Box display='flex' flexDirection='row' paddingY={1}>
            <Typography component='p' variant='body2'>
              {showData.overview}
            </Typography>
          </Box>

          <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            marginTop={1}
            marginBottom={1}
          >
            <Button
              color='primary'
              variant='contained'
              startIcon={<PlayCircleFilledIcon />}
            >
              {showData.release_date ? 'Watch Movie' : 'Watch Episodes'}
            </Button>
            &nbsp;&nbsp;&nbsp;
            {showData.videos.results.length > 0 ? (
              <Button
                color='primary'
                variant='outlined'
                onClick={() => setTrailerToggler(!showTrailer)}
              >
                Trailer
              </Button>
            ) : null}
            {showData.videos.results.length > 0 && (
              <FsLightbox
                toggler={showTrailer}
                sources={[
                  `https://www.youtube.com/watch?v=${showData.videos.results[0].key}`,
                ]}
                type='youtube'
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
