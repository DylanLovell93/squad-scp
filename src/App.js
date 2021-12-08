import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Bio from './Components/Bio';
import Sidebar from './Components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Sidebar />
        <Routes>
          <Route path="/:Name" element={<Bio />} />
        </Routes>
      </div>
    );
  }
}

export default App;
