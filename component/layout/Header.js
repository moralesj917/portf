import React from 'react';
import Link from 'next/link';

const Header = () => (
  <nav className="header  " id="header__sidepanel" className="">
    <ul className="header__navbar sticky">
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
    </ul>
  </nav>
);

export default Header;