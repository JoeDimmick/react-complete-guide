import {gameLogo} from '../../assets/images/game-logo.png';

export default function () {
    return(
        <>
            <header>
                <img src={gameLogo} alt="Hand-drawn tic tac toe game board" />
                <h1>Tic-Tac-Toe</h1>
            </header>
        </>
    )
}