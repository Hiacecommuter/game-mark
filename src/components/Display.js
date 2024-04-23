import { useState } from 'react';
import PlayerNumber from './PlayerNumber.js';
import Game from './Game.js';

function Display(){
    const [isNew, setIsNew] = useState(true); //Check if this is a new game
    const [numberOfPlayers, setNumberOfPlayers] = useState('');

    return(
        <>
            {isNew ? <PlayerNumber onIsNewChange={setIsNew} numberOfPlayers={numberOfPlayers} onSetNumberOfPlayersChange={setNumberOfPlayers}/> 
            : <Game onIsNewChange={setIsNew} numberOfPlayers={numberOfPlayers} onSetNumberOfPlayersChange={setNumberOfPlayers}/>}
        </>
    )
}

export default Display;