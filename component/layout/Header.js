import React from "react";
import Link from "next/link";

const handleHamburger = () => {
  let hamburger = document.querySelector(".hamburger");
  let nav = document.querySelector(".header-links");

  hamburger.classList.toggle("is-active");
  nav.classList.toggle("openNav");
};

const Header = () => (
  <nav className="header" id="header__sidepanel" className="">
    <ul className="header__navbar sticky">
      <Link href="/">
        <a className="header-link header-links__name">Jonathan Morales</a>
      </Link>

      <button
        className="hamburger hamburger--spring"
        type="button"
        onClick={e => handleHamburger(e)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="header-links">
        <Link href="/">
          <a className="header-link header-links-one">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="header-link header-links-two"> Portfolio</a>
        </Link>
        <Link href="/about">
          <a className="header-link header-links-three">About</a>
        </Link>
        <Link href="../../static/resume.pdf">
          <a className="header-link header-links-four">Resume</a>
        </Link>
      </div>
    </ul>
  </nav>
);
export default Header;
