import { useState } from 'react';
import './Game.css';
import Player from './Player';

function Game({onIsNewChange, numberOfPlayers, onSetNumberOfPlayersChange}){

    const [playerNames, setPlayerNames] = useState(Array.from({ length: numberOfPlayers }, (_, index) => `Player ${index + 1}`));

    const handleHomeButton = () =>{
        onIsNewChange(true);
        onSetNumberOfPlayersChange('');
    }

    const handleNameChange = (index, newName) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = newName;
        setPlayerNames(newPlayerNames);
      };


    return (
        
        <div className='Container'>
            <div className="WhiteBox">
                <div className='PlayersContainer'>
                    {playerNames.map((name, index) => (
                        <div key={index}>
                        <Player key={index} defaultName={name} onNameChange={(newName) => handleNameChange(index, newName)} />
                        </div>
                    ))}
                </div>
                <button className='Buttons' onClick={handleHomeButton}>Back to Home</button>
            </div>    
        </div>
    )
}

export default Game;