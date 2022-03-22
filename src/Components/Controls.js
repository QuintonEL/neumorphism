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
    <div className="circle">
      <span
        className={`${pause ? "circle__btn" : "circle__btn shadow"}`}
        onClick={clickHandler}
      >
        <div className={`${pause ? "pause" : "pause visibility"}`}>
          <ion-icon name="pause"></ion-icon>
        </div>
        <div className={`${pause ? "play" : "play visibility"}`}>
          <ion-icon name="play"></ion-icon>
        </div>
      </span>
      <span
        className={`${pause ? "circle__back-1" : "circle__back-1 paused"}`}
      ></span>
      <span
        className={`${pause ? "circle__back-2" : "circle__back-2 paused"}`}
      ></span>
    </div>
  );
};

export default Controls;
