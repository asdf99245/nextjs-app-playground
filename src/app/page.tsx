import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-bold">페이지들</h2>
      <ul>
        <li>
          <Link href="/people">people</Link>
        </li>
        <li>
          <Link href="/planet">planet</Link>
        </li>
        <li>
          <Link href="/starships">starships</Link>
        </li>
      </ul>
    </>
  );
}
