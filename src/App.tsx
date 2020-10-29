import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import { useData } from "./context/GlobalContex";
import Home from "./components/Home";

function App() {
  const { submit } = useData()!;
  if (submit) {
    return (
      <div>
        <Quiz />
      </div>
    );
  }

  return <Home />;
}

export default App;
