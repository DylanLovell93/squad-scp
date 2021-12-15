import { Component } from 'react';
import './Nav.css';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
import DropDown from './DropDown/DropDown';

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const { toggleDarkMode, toggleCustomCss, toggleDropMenu } = this.props;
    const { darkMode, customCss, dropMenu } = this.props.state;
    return (
      <div className="Nav">
        <Hamburger toggleDropMenu={toggleDropMenu} dropMenu={dropMenu} />
        <Logo />
        {dropMenu && <DropDown />}
      </div>
    );
  }
}
export default Nav;
