import React,{useState} from 'react'
import { useContext } from 'react';
import UserContext from '../context/usercontext';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const [user,setUser] = useContext(UserContext);

   const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ username, password }); // store as object
  setUsername("");
  setPassword("");
};
  return (
    <div>
        <h2>login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {"   "}
        <input type="password"
        value={password}
         onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login