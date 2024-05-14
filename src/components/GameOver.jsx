export default function GameOver({ winner,onRestart }) {

    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p2>{winner} won!</p2>}
        {!winner && <p2>It&apos;s a draw</p2>}
        <p><button onClick={onRestart}>Rematch!</button></p>
    </div>

}