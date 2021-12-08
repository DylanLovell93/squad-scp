import './Bio.css';
import { useParams } from 'react-router';
import data from '../data/data.js';

const Bio = () => {
  let { Name } = useParams();
  const fellowInfo = data.find((person) => person.firstName === Name);
  if (!fellowInfo) {
    return <div className="Bio">Fellow Not Found</div>;
  }
  const { firstName, lastName, img, story, role } = fellowInfo;
  return (
    <div className={'Bio' + Name}>
      <img src={img} alt={`Image of ${firstName + ' ' + lastName}`}></img>
      <h2 className="Name">{firstName + ' ' + lastName}</h2>
      <h3 className="Role">{role}</h3>
      <p className="Story">{story}</p>
    </div>
  );
};
export default Bio;
