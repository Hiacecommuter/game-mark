import { useState } from 'react'
import './Player.css'

function Player({defaultName, onNameChange}){

    const [point, setPoint] = useState();
    const [totalPoints, setTotalPoints] = useState(0);
    const [pointList, setPointList] = useState([]);

    const handlePointInput = (e) => {
        const points = parseInt(e.target.value);
        setPoint(points);
    }

    const handleAddButton = () => {
        setPointList([...pointList, point]);
        setTotalPoints(totalPoints + point);
        setPoint(0);
    }

    return(
        <div className='PlayerContainer'>
            <input type='text' value={defaultName} onChange={(e)=>onNameChange(e.target.value)} className='PlayerName'/>
            <p className='TotalPoints'>Total Points: {totalPoints}</p>
            <div>
                {pointList.map((element, index) => (
                <span className='IndividualPoints' key={index}>{element}</span>))}
            </div>
            <input type='number' step='0.01' onChange={handlePointInput} placeholder='Insert points' className='PointsInput'/>
            <button className='AddButton' onClick={handleAddButton}>Add</button>
        </div>
    )
}

export default Player
