import "./App.scss";
import Header from "./Components/Header.js";
import Album from "./Components/Album.js";

function App() {
  return (
    <div className="container">
      <div className="components">
        <Header />
        <Album />
      </div>
    </div>
  );
}

export default App;
