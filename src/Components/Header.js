import "./Header.scss";

const Header = () => {
  return (
    <div className="icon">
      <div className="icon__back">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="icon__menu">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Header;
