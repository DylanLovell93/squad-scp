import './Logo.css';
import Letter from './Logo/Letter';

const Logo = () => {
  const word = 'abbs.md';
  const editedWord = word
    .split('')
    .map((char) => <Letter singleLetter={char} />);
  return <div className="Logo">{editedWord}</div>;
};

export default Logo;
