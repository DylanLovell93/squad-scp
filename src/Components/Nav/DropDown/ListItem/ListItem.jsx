import './ListItem.css';
import example from '../../../.example/exampleFellow.js';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { defaultFirst, defaultLast, defaultImg } = example;
  const { toggleDropMenu } = props;
  const {
    firstName = 'Unknown',
    lastName = 'User',
    img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  } = props.fellow;
  return (
    <li className="ListItem">
      <Link onClick={toggleDropMenu} to={'/' + (firstName || defaultFirst)}>
        <img className="Profile" src={img || defaultImg} />
        <span>
          {(firstName || defaultFirst) + ' ' + (lastName || defaultLast)}
        </span>
      </Link>
    </li>
  );
};

export default ListItem;
