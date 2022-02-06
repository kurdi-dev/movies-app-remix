import { useLoaderData } from 'remix';
import { getAllMovies } from '../../src/utils/fetcher';
export const loader = async () => {
  return getAllMovies();
};

export default function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}
