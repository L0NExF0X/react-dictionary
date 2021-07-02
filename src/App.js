import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="">Dictionary App</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <p>
            This app was coded by{" "}
            <a
              href="https://www.linkedin.com/in/katie-p%C3%A9rez-0a8655209/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile - Katie Pérez"
            >
              Katie Pérez
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/L0NExF0X/react-dictionary"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
