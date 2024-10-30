import { useState } from "react";
import "./App.css";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="font-poppins">
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
