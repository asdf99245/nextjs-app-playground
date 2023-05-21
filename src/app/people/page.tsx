import Link from 'next/link';
import { Suspense } from 'react';

export default async function People() {
  const people = await fetch('https://swapi.dev/api/people').then((res) =>
    res.json()
  );

  const result = Array.from({ length: people.count }, (_, i) => ({
    id: String(i + 1),
  }));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ul className="flex flex-col">
        {result.map(({ id }) => (
          <li key={id} className="py-2">
            <Link href={`/people/${id}`}>people {id}</Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
