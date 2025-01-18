import Player from './Player/Player.jsx';

export default function ScoreBoard () {
    
    return(
        <ol id="players">
            <Player name="player 1" symbol="X"/>
            <Player name="player 2" symbol="O"/>
        </ol>
    )
}