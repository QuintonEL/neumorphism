import { useState } from "react";
import "./Controls.scss";

const Controls = () => {
  const [pause, setPause] = useState("null");

  const clickHandler = () => {
    setPause(1);
    const play = document.querySelector(".play");
    const pause = document.querySelector(".pause");
    const playBtn = document.querySelector(".circle__btn");
    const wave1 = document.querySelector(".circle__back-1");
    const wave2 = document.querySelector(".circle__back-2");

    pause.classList.toggle("visibility");
    play.classList.toggle("visibility");
    playBtn.classList.toggle("shadow");
    wave1.classList.toggle("paused");
    wave2.classList.toggle("paused");
  };

  return (
    <div className="circle">
      <span className="circle__btn" onClick={clickHandler}>
        <ion-icon className="pause" name="pause"></ion-icon>
        <ion-icon className="play" name="play"></ion-icon>
      </span>
      <span className="circle__back-1"></span>
      <span className="circle__back-2"></span>
    </div>
  );
};

export default Controls;
