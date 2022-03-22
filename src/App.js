import "./App.scss";
import Header from "./Components/Header.js";
import Album from "./Components/Album.js";
import Track from "./Components/Track";
import ProgressBar from "./Components/ProgressBar";
import Controls from "./Components/Controls";

import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
      <div class="switch">
        <div class="switch__1">
          <input id="switch-1" type="checkbox" onClick={switchTheme} />
          <label for="switch-1"></label>
        </div>
      </div>
      <div className="components">
        <Header />
        <Album />
        <Track />
        <ProgressBar />
        <Controls />
      </div>
    </div>
  );
}

export default App;
