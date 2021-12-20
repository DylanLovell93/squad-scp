import './DarkMode.css';

const DarkMode = ({ toggleDark, darkMode }) => {
  return (
    <div className="DarkMode">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleDark} />
        <div class="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;
