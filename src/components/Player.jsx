import { useState } from "react"


export default function Player({ initialName, symbol , isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        // setIsEditing(!isEditing); // takes everytimme the initial value....
        setIsEditing(editing => !editing);  //schedules a state update to  true  (access the latest udpatestate)
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let PlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        PlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    return (
        <li className = {isActive ? "active" : undefined}>
            <span className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}