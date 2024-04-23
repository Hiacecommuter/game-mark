import { useState } from 'react'
import './Player.css'

function Player({defaultName, onNameChange}){

    const [point, setPoint] = useState();
    const [totalPoints, setTotalPoints] = useState(0);

    const handlePointInput = (e) => {
        const points = parseInt(e.target.value);
        setPoint(points);
    }

    const handleAddButton = () => {
        setTotalPoints(totalPoints + point);
        setPoint(0);
    }

    return(
        <div className='PlayerContainer'>
            <input type='text' value={defaultName} onChange={(e)=>onNameChange(e.target.value)} className='PlayerName'/>
            <p className='TotalPoints'>Total Points: {totalPoints}</p>
            <input type='number' value={point} onChange={handlePointInput} placeholder='Insert points' className='PointsInput'/>
            <button className='AddButton' onClick={handleAddButton}>Add</button>
        </div>
    )
}

export default Player