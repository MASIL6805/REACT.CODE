import TicketNum from "./ticketnum";
import "./tickets.css";
export default function Tickets({ ticket }) {
    return (
        <div className="ticket">
            <p>Lottery Ticket</p>
            {ticket.map((num, index) => (
                <TicketNum key={index} num={num} />
            ))}
        </div>
    );
}