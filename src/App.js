import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="left"></div>
      <div className="right"></div>
      <Todo />
    </div>
  );
}

export default App;
