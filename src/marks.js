import {useState} from 'react';
import './marks.css'

function OneTurn({value}) {
    return (
            <span className='marks'>{value}</span>
    );
}

function AddButton({add_one_item, onChange, the_display}){
    return (
        <div>
            <input type='number' placeholder={the_display} onChange={onChange}/>
            <button onClick={add_one_item}>Add</button>
        </div>
    );
}


function APlayer({markList, handleAdding, onChange}){
    let total = 0;

    let marks = markList.map((e, i)=> {
        return (
                <li key={i} className='point-list'>
                    <OneTurn value={e}/>
                </li>
            );
        })

    markList.forEach((e)=>{
        total += Number(e);
    })

    return (
        <div>
            <div>
                {marks}
            </div>
            <hr />
            <div>
                <p> sum is {total}</p>

            </div>
            <div>
                <AddButton add_one_item={handleAdding} onChange={onChange} the_display={"Enter a new mark"}/>
            </div>
        </div>
    )
}


function Board() {
    let [aList, setAList] = useState([]);
    const [newRecord, setNewRecord] = useState(0);

    const handleInputChange = (e) => {
                        setNewRecord(e.target.value);
                    };

    const addItem = () => {
        if(newRecord!==0){
            const newList = [...aList, newRecord];
            setAList(newList);
            setNewRecord(0);
        }
    }

    return (
        <div className='game'>
            <APlayer markList={aList} handleAdding={addItem} onChange={handleInputChange}/>
        </div>
    )
}

function Game(){
    let [existed, setExisted] = useState(true);
    let [num_players, setNumber_players] = useState(3);
    let [players, setPlayers] = useState("")

    const handlePlayers = (e)=>{
        setNumber_players(Number(e.target.value));
        }
    function addPlayers(){
        if (num_players>=1 && num_players <=8){
            setExisted(false);
            let cons_array = new Array(num_players).fill(1);
            setPlayers(cons_array.map((e,i)=>{
               return ( <div>
                    <hr /><br />
                    <h1>player {i+1}</h1>
                    <Board />
                   <hr />
                </div>);
            }));
        }
    }



    if(existed){
        return (
            <div>
                <p>input number of plays</p>
                <AddButton add_one_item={addPlayers} onChange={handlePlayers} the_display={"input number of plays"} />
            </div>
        );
    }else{
        return (
            <div>
                {players}
            </div>
        );
    }


}

export default Game;