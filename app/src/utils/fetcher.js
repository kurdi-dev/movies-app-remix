import requestUrls from '../shared/requests';
import movieGenres from '../shared/movieGenres';
import tvGenres from '../shared/tvGenres';
const baseURL = 'https://api.themoviedb.org/3';
import axios from 'axios';

const API_KEY = process.env.TMDB_API_KEY || '';

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

async function getFromAPI(fetchUrl, singular = false) {
  return axios
    .get(fetchUrl)
    .then((res) => {
      if (res.status === 200) {
        if (singular) {
          return res.data;
        } else {
          return res.data.results;
        }
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

export async function getAllMovies(genre, page) {
  let fetchUrl = `${baseURL}${movieGenres[genre]}&language=en-US&page=${page}`;
  return getFromAPI(fetchUrl);
}

export async function getSingleMovie(movie_id) {
  let fetchUrl = `${baseURL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,keywords,similar,credits`;
  return getFromAPI(fetchUrl, true);
}

export async function getAllTv(genre, page) {
  let fetchUrl = `${baseURL}${tvGenres[genre]}&language=en-US&page=${page}`;
  return getFromAPI(fetchUrl);
}
export async function getSingleTv(tv_id) {
  let fetchUrl = `${baseURL}/tv/${tv_id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,keywords,similar,credits`;
  const tvData = await getFromAPI(fetchUrl, true);
  console.log('# seasons: ', tvData.number_of_seasons);
  const seasons = [];
  for (let i = 1; i <= tvData.number_of_seasons; i++) {
    let seasonFetchUrl = `${baseURL}/tv/${tv_id}/season/${i}?api_key=${API_KEY}&language=en-US`;
    let seasonData = await getFromAPI(seasonFetchUrl, true);
    seasons.push(seasonData);
  }

  return { tvData, seasons };
}
