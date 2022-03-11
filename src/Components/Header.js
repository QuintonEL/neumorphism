import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="icon">
      <div className="icon__home">
        <ion-icon name="home"></ion-icon>
      </div>
      <div className="icon__account">
        <ion-icon name="person"></ion-icon>
      </div>
      <div className="icon__settings">
        <ion-icon name="settings"></ion-icon>
      </div>
    </div>
  );
};

export default Header;
