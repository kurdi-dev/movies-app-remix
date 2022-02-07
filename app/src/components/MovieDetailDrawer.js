import React from 'react';
import {
  Button,
  Drawer,
  Container,
  Typography,
  Box,
  IconButton,
  Chip,
  Rating,
} from '@mui/material';
import { Link } from 'remix';
import genres from '../shared/genres';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function MovieDetailDrawer({ movieData, show, handeCloseInfo }) {
  const genreChips = [];
  console.log('movie data: ', movieData);
  movieData != null &&
    movieData?.genre_ids.forEach((id) =>
      genreChips.push(
        <Chip
          key={id}
          style={{ marginRight: 5 }}
          variant='outlined'
          color='default'
          clickable={false}
          size='small'
          label={`${genres[id]}`}
        />
      )
    );

  if (!movieData) {
    return null;
  }

  return (
    <Drawer
      anchor='bottom'
      open={show}
      onClose={handeCloseInfo}
      PaperProps={{ sx: { background: '#14181e' } }}
    >
      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component='h1'
            sx={{
              color: 'primary.main',
              fontSize: { xs: 18, sm: 22, lg: 26 },
            }}
          >
            {movieData?.title || movieData?.name || movieData?.original_name}
          </Typography>
          <IconButton onClick={handeCloseInfo}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box display='flex' flexDirection='row' alignItems='center'>
          <Rating
            name='read-only'
            value={movieData.vote_average / 2}
            readOnly
          />

          <Box
            sx={{
              borderStyle: 'solid',
              borderColor: '#838383',
              borderWidth: 0.3,
              padding: '4px',
              borderRadius: 2,
              marginLeft: 1,
            }}
          >
            <Typography variant='caption' color='primary' component='p'>
              {movieData.vote_average}
            </Typography>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row' flexWrap='wrap' py={2}>
          {genreChips}
        </Box>
        <Box display='flex' flexDirection='row'>
          <Typography
            variant='body1'
            sx={{ fontSize: { xs: 14, sm: 16, lg: 18 } }}
          >
            {movieData.overview}
          </Typography>
        </Box>

        <Box
          display='flex'
          flexDirection='row'
          marginTop={1}
          marginBottom={1}
          justifyContent='flex-end'
        >
          <Link
            to={`/${movieData.first_air_date ? 'tv' : 'movies'}/${
              movieData.id
            }`}
          >
            <Button
              color='primary'
              variant='contained'
              endIcon={<VisibilityIcon />}
              onClick={handeCloseInfo}
            >
              More
            </Button>
          </Link>
        </Box>
      </Container>
    </Drawer>
  );
}
