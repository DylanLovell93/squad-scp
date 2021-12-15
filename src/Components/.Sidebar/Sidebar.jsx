import { Component } from 'react';
import './Sidebar.css';
import data from '../../data/data.js';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const buttons = data.map((fellow) => {
      return (
        <Link to={'/' + (fellow.firstName || 'Unknown')}>
          <button>{fellow.firstName || 'Unknown'}</button>
        </Link>
      );
    });
    return (
      <div className="Sidebar">
        <p>Sidebar</p>
        {buttons}
      </div>
    );
  }
}
export default Sidebar;
