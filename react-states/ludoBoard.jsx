import {useState} from 'react'
export default function LudoBoard() { 
//using objects as state variables  
let [moves, setmoves] = useState({ blue: 0,yellow: 0,green: 0,red: 0});
let [arr, setarr] = useState(["no movers"]);


let updateblue = () => {
setmoves({...moves, blue: moves.blue + 1});//spred operator......to pass copy....objects not changed directly in ui

//for callbacks
// setmoves((prev) => ({...prev, blue: prev.blue + 1})); //alternative way

setarr([...arr, "blue moves"]); //adding to array

//for callbacks
// setarr((prev) => [...prev, "blue moves"]); //alternative way
}
    return (
        <div>
            <p>Game begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                 <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}}>+1</button>
                 <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                 <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}