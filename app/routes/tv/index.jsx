import { Link, useLoaderData } from 'remix';
import { getAllTv } from '../../src/utils/fetcher';

export const loader = async () => {
  return getAllTv();
};
export default function TV() {
  const tvs = useLoaderData();
  console.log(tvs);
  return (
    <div>
      <h1>TV</h1>
    </div>
  );
}
