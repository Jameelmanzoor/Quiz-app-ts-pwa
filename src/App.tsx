import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import { useData } from "./context/GlobalContex";
import Home from "./components/Home";
import { initNotification } from "./services/firebase_service";

function App() {
  const { submit } = useData()!;
  initNotification();
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
