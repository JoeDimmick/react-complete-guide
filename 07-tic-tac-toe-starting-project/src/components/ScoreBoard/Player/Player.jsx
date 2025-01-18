import {useState} from 'react';

export default function Player ({name,symbol}) {
    
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(name);

    function handlePlayerNameChange (e) {
        setPlayerName(e.target.value);
    }

    function handleEditClick() {
        setIsEditing(!isEditing);
        console.log("button clicked");
    }

    function handleSaveClick () {
        if (playerName.trim()){
            setPlayerName(playerName);
        }
        setIsEditing(!isEditing);
    }
    
    return(
        <li>
            <span className="player">
            {isEditing ? 
                <input type="text" onChange={handlePlayerNameChange}></input> : 
                <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing ? 
                <button onClick={handleSaveClick}>Save</button> :
                <button onClick={handleEditClick}>Edit</button>
            }
        </li>    
    )
}