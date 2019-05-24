import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InfoCard from "../src/infoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={require("../src/images/2019HeadShot2.jpg")}
          className="App-logo"
          alt="logo"
        />
        <p>
          <code>Jonathan Helvey</code>
          <div>Portfolio</div>
          <InfoCard />
          <img
            style={{ hieght: "460px", width: "460px" }}
            src={require("../src/images/ilya-pavlov-87438-unsplash copy.jpg")}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
