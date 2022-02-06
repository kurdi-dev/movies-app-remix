let API_KEY = process.env.TMDB_API_KEY || '';
const tvGenres = {
  //tvs
  trending: `/trending/tv/day?api_key=${API_KEY}`,
  action_Adventure: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  animation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  comedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  crime: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  documentary: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  drama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  family: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  kids: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  mystery: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  news: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  reality: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  scifi_Fantasy: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  soap: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  talk: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  war_Politics: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  western: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
};
export default tvGenres;
