import requestUrls from '../shared/requests';
const baseURL = 'https://api.themoviedb.org/3';
import axios from 'axios';
export async function getAllData() {
  let allShows = {};
  const categories = Object.entries(requestUrls);
  for (const [title, url] of categories) {
    await axios
      .get(`${baseURL}${url}`)
      .then((res) => {
        if (res.status === 200) {
          allShows[title] = res.data;
        } else {
          console.log('There is somthing wrong with the TMDB API get request');
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
  return allShows;
}

const movies = [
  {
    id: 0,
    title: 'Movie title 1',
  },
  {
    id: 1,
    title: 'Movie title 2',
  },
];

export async function getAllMovies() {
  return movies;
}

export async function getMovie(id) {
  return movies[id];
}

const tv = [
  {
    slug: 'tv-tmdb 1',
    title: 'tv title 1',
  },
  {
    slug: 'tv-tmdb 2',
    title: 'tv title 2',
  },
];
export async function getAllTv() {
  return tv;
}
export async function getTv(id) {
  return tv[id];
}
