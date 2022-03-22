import { useState } from "react";
import "./Controls.scss";

const Controls = () => {
  const [pause, setPause] = useState(0);

  const clickHandler = () => {
    if (pause === 0) {
      setPause(1);
    } else {
      setPause(0);
    }
  };

  return (
    <div className="buttonContainer">
      <div className="icon__skipBack">
        <ion-icon name="play-skip-back-outline"></ion-icon>
      </div>
      <div className="circle">
        <span
          className={`${pause ? "circle__btn" : "circle__btn shadow"}`}
          onClick={clickHandler}
        >
          <div className={`${pause ? "pause" : "pause visibility"}`}>
            <ion-icon className="icon" name="pause"></ion-icon>
          </div>
          <div className={`${pause ? "play" : "play visibility"}`}>
            <ion-icon name="play"></ion-icon>
          </div>
        </span>
      </div>
      <div className="icon__skipForward">
        <ion-icon name="play-skip-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Controls;
