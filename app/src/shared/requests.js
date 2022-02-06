const API_KEY = process.env.TMDB_API_KEY || '';
const requests = {
  //Movies
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  Animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  Documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  Family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  Fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  History: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Music: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  Mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  TVMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  Thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  War: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  Western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  //Tvs
  TvsNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  //Others
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
};
export default requests;
