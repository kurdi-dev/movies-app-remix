import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'© '}
      <Link color='inherit' href='https://github.com/kurdi-dev'>
        Kurdi-Dev
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
