import "./Album.scss";
import albumCover from "../album.webp";

const Album = () => {
  return (
    <div className="album">
      <img className="album__cover" src={albumCover} alt="album"></img>
    </div>
  );
};

export default Album;
