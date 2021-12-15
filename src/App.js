import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Bio from './Components/Bio';
import Sidebar from './Components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: true,
      customCss: false,
      dropMenu: false,
    };
  }

  toggleDark = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  toggleCustom = () => {
    this.setState({
      customCss: !this.state.customCss,
    });
  };

  toggleDropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          toggleCustom={this.toggleCustom}
          toggleDark={this.toggleDark}
          toggleDropMenu={this.toggleDropMenu}
          state={this.state}
        />
        <Sidebar />
        <Routes>
          <Route path="/:Name" element={<Bio />} state={this.state} />
        </Routes>
      </div>
    );
  }
}

export default App;
