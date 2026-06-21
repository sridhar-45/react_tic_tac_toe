import Player from "./components/Player.jsx";
import GameBoard  from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";



function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export default function App() {
  const [gameTurns , setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  function handlePlayerChange(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      
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
      <Log turns={gameTurns}/>
    </main>
  );
}