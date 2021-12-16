import './DropDown.css';
import fellowData from '../../../data/data';
import ListItem from './ListItem/ListItem';

const DropDown = (props) => {
  const { toggleDropMenu } = props;
  const links = fellowData.map((fellow) => (
    <ListItem fellow={fellow} toggleDropMenu={toggleDropMenu} />
  ));
  return (
    <div className="DropDown">
      <ul>{links}</ul>
    </div>
  );
};

export default DropDown;
