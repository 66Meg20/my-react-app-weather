import Weather from "./Weather.js";

import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="amarillo" />
      </div>
      <div className="projectLink">
        This project was coded by Megan Jackson and is open-sourced on{" "}
        <a href="/" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
