import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './todo.jsx'
import Lottery from './lottery.jsx'
import TicketNum from './ticketnum.jsx'
import Tickets from './tickets.jsx'
import { sum } from './helperfun';
import Joker from './joker.jsx'

function App() {

  // let wincondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);//all equal

    // return sum(ticket) === 10; //sum equal to 10

    //rerurn ticket[0]== 0; //first number is zero
  //}
    return (
    <>
     {/* <Tickets ticket={[0,1,2]} />
     <Tickets ticket={[0,1,3,5,7,6,6]} /> */}
     {/* <br />
     <br />
     <hr />
      <Todolist />
      <hr />
      <Lottery /> */}
      {/* <Lottery n={2} winningSum={wincondition} /> */}
      <Joker />
    </>
  )
}

export default App
