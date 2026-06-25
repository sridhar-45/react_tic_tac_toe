// import { useState} from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ handlePlayerChange, board }){

    
        // const [gameBoard, setGameBoard] = useState(initialGameBoard);

        // function handleSelectSquare(rowIndex, colIndex){
        //     setGameBoard((prevGameBoard) => {   //prevGameBoard is a parameter containing the latest value of the gameBoard state
        //         const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the game board
        //         updateGameBoard[rowIndex][colIndex] = activePlayerSymbol; // Example: set the selected square to "X"
        //         return updateGameBoard;
        //     });
        
        //     handlePlayerChange();
        // }
        return (
            <ol id="game-board">
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => 
                                      handlePlayerChange(rowIndex, colIndex)}
                                     disabled={playerSymbol !== null}>
                                        {playerSymbol}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        )
};