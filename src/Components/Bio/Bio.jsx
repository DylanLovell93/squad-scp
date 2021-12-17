import './Bio.css';
import { useParams } from 'react-router';
import data from '../../data/data.js';
import example from '../.example/exampleFellow';

const Bio = () => {
  let { Name } = useParams();
  const fellowInfo = data.find((person) => person.firstName === Name) || {};
  const { defaultFirst, defaultLast, defaultImg, defaultStory, defaultRole } =
    example;
  const {
    firstName = defaultFirst,
    lastName = defaultLast,
    img = defaultImg,
    story = defaultStory,
    role = defaultRole,
  } = fellowInfo;
  return (
    <div className={'Bio' + ' ' + 'Bio' + Name}>
      <img
        className="Profile"
        src={img}
        alt={`Image of ${firstName + ' ' + lastName}`}
      ></img>
      <h2 className="Name">{firstName + ' ' + lastName}</h2>
      <h3 className="Role">{role}</h3>
      <p className="Story">{story}</p>
    </div>
  );
};
export default Bio;
