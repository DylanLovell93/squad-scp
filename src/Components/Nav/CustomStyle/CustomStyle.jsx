import './CustomStyle.css';

const CustomStyle = ({ toggleCustom, customCss }) => {
  return (
    <div className="CustomStyle">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleCustom} />
        <div class="slider round"></div>
      </label>
    </div>
  );
};

export default CustomStyle;
