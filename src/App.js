import React from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import BuildIn from "./components/Build_In";
// import Variable from "./components/Variable";
// import Learn from "./components/Learn1/index";

function App() {
  return (
    <div className="App">
      <BuildIn />

      <h1>Welcome to react hooks!</h1>

      <ColorBox />
      {/* <Learn /> */}
      {/* <Variable /> */}
    </div>
  );
}

export default App;
