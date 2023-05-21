interface Params {
  id: string;
}

interface Props {
  params: Params;
}

export default async function Person({ params }: Props) {
  const person = await fetch(`https://swapi.dev/api/people/${params.id}`).then(
    (res) => res.json()
  );

  return (
    <div>
      <h3>people {params.id}</h3>
      <p>이름: {person.name}</p>
      <p>키: {person.height}</p>
      <p>성별: {person.gender}</p>
    </div>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const people = await fetch('https://swapi.dev/api/people').then((res) =>
    res.json()
  );

  const result = Array.from({ length: people.count }, (_, i) => ({
    id: String(i + 1),
  }));

  return result;
}
