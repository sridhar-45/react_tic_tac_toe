import Player from "./components/Player.jsx";
import GameBoard  from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";

export default function App() {
  const [gameTurns , setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {square : {row:  rowIndex , col: colIndex} ,
        player: currentPlayer},
        ...prevTurns];

      return updatedTurns;
    });
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard handlePlayerChange={handlePlayerChange} turns = {gameTurns}/>
      </div>
      <Log />
    </main>
  );
}