import * as React from 'react';
import { Link, useLoaderData } from 'remix';
import Typography from '@mui/material/Typography';
import { getAllData } from '../src/utils/fetcher';

export const loader = async () => {
  return getAllData();
};

// https://remix.run/api/conventions#meta
export const meta = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <React.Fragment>
      <Typography variant='h4' component='h1' gutterBottom>
        Hello World!
      </Typography>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/tv'>TV Series</Link>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
