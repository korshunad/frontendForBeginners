import React from "react";
import {Link} from "gatsby";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmVisible: false
    }
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
  }

  toggleBurgerMenu() {
    const { bmVisible } = this.state;
    this.setState({ bmVisible: !bmVisible});
  }
  updateDimensions() {
    if(window.innerWidth < 700) {
      this.setState({ bmVisible: false });
    } else {
      this.setState({ bmVisible: true });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const { bmVisible } = this.state;
    return (
      <header>
        <Link to="/">
          <img className="logo" src="/logo.svg" alt="Frontend for Beginners logo"/>
        </Link>
        <nav>
          <ul className="pointer" id="menu-links" style={{visibility: bmVisible ? 'visible' : 'hidden', opacity: bmVisible ? '1' : '0'}}>
            <li>
              <Link to="/how-to/">
                How to
              </Link>
            </li>
            <li>
              <Link to="/overview/">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/about/">
                About
              </Link>
            </li>
            <li>
              <a href="mailto:frontendbegins@gmail.com">
                Contact
              </a>
            </li>
            <span id="close-menu" className="pointer" onClick={this.toggleBurgerMenu}>×</span>
          </ul>
          <div id="burger-menu" className="pointer" onClick={this.toggleBurgerMenu}>
          menu
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
