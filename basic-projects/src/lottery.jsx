import { useState } from 'react';
import './lottery.css';
import { genTicket,sum } from './helperfun';
import Tickets from './tickets.jsx';

export default function Lottery({n=3,winningSum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let iswinning= winningSum(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> */}
            <Tickets ticket={ticket} />
            <br />
            <br />
            <button onClick={buyTicket}>Buy NEW TICKET</button>
            <h3>{iswinning && "Congratulation,you won"}</h3>
        </div>
    );
}
