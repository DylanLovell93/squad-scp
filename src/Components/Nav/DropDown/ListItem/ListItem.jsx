import './ListItem.css';
import example from '../../../.example/exampleFellow.js';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { defaultFirst, defaultLast, defaultImg } = example;
  const { toggleDropMenu } = props;
  const {
    firstName = defaultFirst,
    lastName = defaultLast,
    img = defaultImg,
  } = props.fellow;
  return (
    <li className="ListItem">
      <Link onClick={toggleDropMenu} to={'/' + firstName}>
        <img className="Profile" src={img} />
        <span>{firstName + ' ' + lastName}</span>
      </Link>
    </li>
  );
};

export default ListItem;
