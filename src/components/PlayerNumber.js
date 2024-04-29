import './PlayerNumber.css'

function PlayerNumber({onIsNewChange, numberOfPlayers, onSetNumberOfPlayersChange}){

    const handleConfirmButton = () =>{
        if (numberOfPlayers>0 && numberOfPlayers<7)
        {onIsNewChange(false);}
        else{
            alert("Please enter number of players between 1-6!")
        }
    }

    return(
            <div className='Container'>
                <div className="WhiteBox">
                    <div className='InputRequest'>Enter number of players:</div>
                    <input type='number' className='UserInput' placeholder='Enter number between 1-6' min="2" max="4" 
                    value={numberOfPlayers} onChange={(e) => onSetNumberOfPlayersChange(e.target.value)}/>
                    <button className='Buttons' onClick={handleConfirmButton}>Confirm</button>
                </div>
            </div>
    )
}

export default PlayerNumber