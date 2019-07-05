import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      this.setState({
        scrolled: true
      })
    } else {
      this.setState({
        scrolled: false
      })
    }
   
    
  }

  render() {
    return(
      <div className={this.state.scrolled ? 'header sticky' : 'header' } id="myHeader">
        <div className="header__navbar">
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

        <div className="header__hamburgericon">
          <div className="header__hamburgericon--bars"></div>
          <div className="header__hamburgericon--bars"></div>
          <div className="header__hamburgericon--bars"></div>
        </div>
      </div>
    );
  }
}

export default Header;