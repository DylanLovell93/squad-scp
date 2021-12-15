import './Hamburger.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Hamburger = (props) => {
  const { toggleDropMenu, dropMenu } = props;
  return (
    <div className="Hamburger">
      {dropMenu ? (
        <AiOutlineClose color="white" onClick={toggleDropMenu} />
      ) : (
        <AiOutlineMenu color="white" onClick={toggleDropMenu} />
      )}
    </div>
  );
};

export default Hamburger;
