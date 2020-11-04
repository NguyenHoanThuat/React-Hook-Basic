import React from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import Learn from "./components/Learn1/index";

function App() {
  return (
    <div className="App">
      <h1>Welcome to react hooks!</h1>

      <ColorBox />
      <Learn />
    </div>
  );
}

export default App;
