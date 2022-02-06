import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        py: 2,
      }}
    >
      <Typography variant='button' color='text.secondary' align='center'>
        {'© '}
        {new Date().getFullYear()}
        {' Walid R. Rashed • '}
        <Link
          color='primary'
          sx={{ textDecoration: 'none' }}
          href='https://github.com/kurdi-dev'
        >
          Kurdi-Dev
        </Link>
      </Typography>
    </Box>
  );
}
