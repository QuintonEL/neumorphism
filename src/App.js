import "./App.scss";
import Header from "./Components/Header.js";
import Album from "./Components/Album.js";
import Track from "./Components/Track";
import ProgressBar from "./Components/ProgressBar";

function App() {
  return (
    <div className="container">
      <div className="components">
        <Header />
        <Album />
        <Track />
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;
