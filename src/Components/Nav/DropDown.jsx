import './DropDown.css';
import fellowData from '../../data/data.js';
import { Link } from 'react-router-dom';

const DropDown = () => {
  const links = fellowData.map((fellow) => (
    <li>
      <Link to={'/' + fellow.firstName}>
        {fellow.firstName + ' ' + fellow.lastName}
      </Link>
    </li>
  ));
  return (
    <div className="DropDown">
      <ul>{links}</ul>
    </div>
  );
};

export default DropDown;
