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

    const handleDeductButton = () => {
        let negativePoint = 0-point;
        setPointList([...pointList, negativePoint]);
        setTotalPoints(totalPoints - point);
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
            <input type='number' value={point} onChange={handlePointInput} placeholder='Insert points' className='PointsInput'/>
            <button className='AddButton' onClick={handleAddButton}>Add</button>
            <button className='DeductButton' onClick={handleDeductButton}>Deduct</button>

        </div>
    )
}

export default Player