import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <div className="slider">
      <div className="timeStamps">
        <p>1:30</p>
        <p>3:00</p>
      </div>
      <div className="slider__box">
        <span className="slider__btn" id="find"></span>
        <span className="slider__color"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
