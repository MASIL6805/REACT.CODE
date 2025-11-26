import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count.jsx'

function App() {
  // const [counter, setCounter] = useState(5)

  // //let counter = 5

  // const addValue=() => {
  //   //counter += 1
  //   setCounter(counter+1)
  //   console.log("clicked", counter)
  // }

  // const removevalue=() => {
  //   //counter -= 1
  //   setCounter(counter-1)
  //   console.log("clicked", counter)
  // }

  return (
    <>
    <Counter />
     {/* <h1>chai or react</h1>
     <h2>counter value={counter}</h2>

     <button
     onClick={addValue}>add value</button>
     <br />
     <button
     onClick={removevalue}>decrease value</button> */}
    </>
  )
}

export default App
