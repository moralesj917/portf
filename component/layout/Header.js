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
    this.setState({
      scrolled: true
    })
    
  }

  render() {
    return(
      <div className={this.state.scrolled ? 'header sticky' : 'header' } >
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
  }
}

export default Header;