import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [Password, setPassword] = useState('')

 //use ref hook
  const passwordRef = useRef(null)

 

 const generatePassword = useCallback(() => 
  {
    let password = ''
    let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    
    for (let i = 0; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length+1)
      password+= str.charAt(randomIndex)
    }

    setPassword(password)

 }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    ///passwordRef.current.setSelectionRange(0, 99999) // For mobile devices//number of value to selsct
    window.navigator.clipboard.writeText(Password)
    },[Password])

 useEffect(() => {
    generatePassword()
 },[length, numberAllowed, charAllowed, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={20}
            value={length}
            className='coursor-pointer mb-3'
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="" className='mb-3'>Length:{length}</label>
          </div> 


          <div className='flex items-center gap-x-1 mb-3 '>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput" >Numbers</label>
          </div>


          <div className='flex items-center gap-x-1 mb-3 '>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
