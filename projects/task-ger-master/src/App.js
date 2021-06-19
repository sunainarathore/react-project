import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskMain from "./components/TaskMain";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TaskMain />
    </div>
  );
}

export default App;
