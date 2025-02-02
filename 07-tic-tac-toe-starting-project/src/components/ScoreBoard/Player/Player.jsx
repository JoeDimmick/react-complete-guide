import {useState} from 'react';

export default function Player ({name,symbol}) {
    
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(name);

    function handlePlayerNameChange (e) {
        setPlayerName(e.target.value);
    }

    function handleClick () {
        if (playerName.trim()){
            setPlayerName(playerName);
        }
        setIsEditing(editing => !editing);
    }
    
    return(
        <li>
            <span className="player">
            {isEditing ? 
                <input type="text" data="nameInput" required value={playerName} onChange={handlePlayerNameChange}></input> : 
                <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>    
    )
}