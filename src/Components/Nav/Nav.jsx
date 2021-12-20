import { Component } from 'react';
import './Nav.css';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
import DropDown from './DropDown/DropDown';
import DarkMode from './DarkMode/DarkMode';

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      toggleDark,
      toggleCustomCss,
      toggleDropMenu,
      state: { darkMode, customCss, dropMenu },
    } = this.props;
    return (
      <div className="Nav">
        <Hamburger toggleDropMenu={toggleDropMenu} dropMenu={dropMenu} />
        <DarkMode toggleDark={toggleDark} darkMode={darkMode} />
        <Logo />
        {dropMenu && <DropDown toggleDropMenu={toggleDropMenu} />}
      </div>
    );
  }
}
export default Nav;
