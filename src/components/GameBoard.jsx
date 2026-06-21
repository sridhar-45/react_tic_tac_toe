import { useState} from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard(){
        const [gameBoard, setGameBoard] = useState(initialGameBoard);

        function handleSelectSquare(rowIndex, colIndex){
            setGameBoard((prevGameBoard) => {   //prevGameBoard is a parameter containing the latest value of the gameBoard state
                const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the game board
                updateGameBoard[rowIndex][colIndex] = "X"; // Example: set the selected square to "X"
                return updateGameBoard;
            });
        }
        return (
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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