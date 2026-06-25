import Player from "./components/Player.jsx";
import GameBoard  from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./Winning_Combinations.js";
import GameOver from "./components/GameOver.jsx";



const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}



export default function App() {
  const [gameTurns , setGameTurns] = useState([]);
  // const [hasWinner , setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");
 
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

    for (const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
  
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onReset={handleReset} />}
        <GameBoard handlePlayerChange={handlePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}