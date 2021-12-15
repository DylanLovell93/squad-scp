import './DropDown.css';
import fellowData from '../../../data/data';
import ListItem from './ListItem/ListItem';

const DropDown = () => {
  const links = fellowData.map((fellow) => <ListItem fellow={fellow} />);
  return (
    <div className="DropDown">
      <ul>{links}</ul>
    </div>
  );
};

export default DropDown;
