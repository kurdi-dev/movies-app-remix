import { useLoaderData } from 'remix';

export const loader = async ({ params }) => {
  return params.id;
};

export default function moviePage() {
  const movieId = useLoaderData();
  return (
    <div>
      <h1>Showin movie: {movieId}</h1>
    </div>
  );
}
