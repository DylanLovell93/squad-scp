import './ListItem.css';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { firstName, lastName } = props.fellow;
  return (
    <li className="ListItem">
      <Link to={'/' + firstName}>{firstName + ' ' + lastName}</Link>
    </li>
  );
};

export default ListItem;
