import requestUrls from '../shared/requests';
import movieGenres from '../shared/movieGenres';
import tvGenres from '../shared/tvGenres';
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
          allShows[title] = res.data.results;
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

export async function getAllMovies(genre, page) {
  let fetchUrl = `${baseURL}${movieGenres[genre]}&language=en-US&page=${page}`;
  return axios
    .get(fetchUrl)
    .then((res) => {
      if (res.status === 200) {
        return res.data.results;
      } else {
        console.log('There is somthing wrong with the TMDB API get request');
        return false;
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
      return false;
    });
}

export async function getMovie(id) {
  return id;
}

export async function getAllTv(genre, page) {
  let fetchUrl = `${baseURL}${tvGenres[genre]}&language=en-US&page=${page}`;
  return axios
    .get(fetchUrl)
    .then((res) => {
      if (res.status === 200) {
        return res.data.results;
      } else {
        console.log('There is somthing wrong with the TMDB API get request');
        return false;
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
      return false;
    });
}
export async function getTv(id) {
  return id;
}
