import './Logo.css';
import Letter from './Letter/Letter.jsx';
import { Link } from 'react-router-dom';

const Logo = () => {
  const word = 'abbs.md';
  const editedWord = word
    .split('')
    .map((char) => <Letter singleLetter={char} />);
  return (
    <div className="Logo">
      <Link to="/">{editedWord}</Link>
    </div>
  );
};

export default Logo;
