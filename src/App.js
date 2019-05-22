import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InfoCard from "../src/infoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>MY APP</code>
          <InfoCard />
        </p>
      </header>
    </div>
  );
}

export default App;
