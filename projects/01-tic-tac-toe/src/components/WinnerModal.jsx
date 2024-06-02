import { Square } from "./Square.jsx"
export function WinnerModal({ resetGame, winner }) {
    if( winner === null) return null
    const winnerText = winner === false ? 'Empate' : 'Gana' + winner
    return (
        <section className="winner">
            <div className="text">
            <h2>{winnerText}</h2>
            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Reiniciar</button>
            </footer>
            </div>
        </section>
    )
}