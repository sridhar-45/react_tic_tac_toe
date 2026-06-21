export default function Log( { turns }) {
    return (
        <ol id = "log">
            {turns.map(turn => <li>{} selected {}</li>)}
        </ol>
    )
}