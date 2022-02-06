let API_KEY = process.env.TMDB_API_KEY || '';
const movieGenres = {
  //Movies
  trending: `/trending/movie/day?api_key=${API_KEY}`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  history: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  music: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  science_fiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  tv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  war: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};
export default movieGenres;
