import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="header-links">Home</a>
      </Link>
      <Link href="/portfolio">
        <a className="header-links two "> Portfolio</a>
      </Link>
      <Link href="/about">
        <a className="header-links three">About</a>
      </Link>
      <hr />
    </div>
  );
};

export default Header;