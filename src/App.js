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
        <a
          href="https://github.com/66Meg20/my-react-app-weather"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
