import React from "react";
import "./App.css";
import Profile from "./Profile";
import Skills from "./Skills";

function App() {
  const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <div className="App">
      <Profile />
      <Skills skills={skillsList} />
    </div>
  );
}

export default App;
