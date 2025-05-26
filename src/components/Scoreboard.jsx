export default function Scoreboard( {score, highScore} ) {
    return (
        <div className="score">
            <h4>Score: {score}</h4>
            <h4>HighScore: {Math.max(...highScore)}</h4>
        </div>
    )
}