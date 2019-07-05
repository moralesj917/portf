import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <div className="footer-first">
      <Link href="https://www.linkedin.com/in/jonathan-m-23327b118/">
        <a className="footer-links footer-one">Linkedin</a>
      </Link>

      <Link href="https://github.com/jmoral1943">
        <a className="footer-links footer-two">Github</a>
      </Link>

      <Link href="../../static/resume.pdf">
        <a className="footer-links footer-three">Resume</a>
      </Link>
    </div>

    <div className="footer-second">
      <p>Charlotte, NC, USA</p>
    </div>

    <div className="footer-third">
      <p>&copy; Jonathan Morales</p>
    </div>
  </div>
);

export default Footer;