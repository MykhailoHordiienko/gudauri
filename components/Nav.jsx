import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">MAIN</Link>
        </li>
        <li>
          <Link href="/gudauri">GUDAURI</Link>
        </li>
        <li>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link href="/questions">QUESTIONS</Link>
        </li>
        <li>
          <Link href="/contacts">CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
