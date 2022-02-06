import { useLoaderData } from 'remix';

export const loader = async ({ params }) => {
  return params.id;
};
export default function tvPage() {
  const tvId = useLoaderData();
  return (
    <div>
      <h1>Showing tv : {tvId}</h1>
    </div>
  );
}
