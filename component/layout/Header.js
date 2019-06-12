import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="header-links header-links-one">Home</a>
    </Link>
    <Link href="/portfolio">
      <a className="header-links header-links-two"> Portfolio</a>
    </Link>
    <Link href="/about">
      <a className="header-links header-links-three">About</a>
    </Link>
    <Link href="../../static/resume.pdf">
      <a  className="header-links header-links-four">Resume</a>
    </Link>
  </div>
);

export default Header;