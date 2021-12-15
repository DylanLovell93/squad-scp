import './Letter.css';

const Letter = (props) => {
  const { singleLetter } = props;
  return <span className="Letter">{singleLetter}</span>;
};

export default Letter;
