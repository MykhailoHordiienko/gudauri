import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Link from 'next/link';
import Nav from './Nav';
import BookLink from './BookLink';

const Header = () => {
  return (
    <header className="absolute w-full flex items-center justify-between px-10 pt-5">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
        />
      </Link>
      <Nav />
      <BookLink />
    </header>
  );
};

export default Header;
