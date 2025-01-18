import Header from './components/Header/Header.jsx';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.jsx';

function App() {
  

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <Header/>
      <main>
        <div id="game-container">
        <ScoreBoard />
          GAME BOARD
        </div>
      </main>
    </>
    )
}

export default App
