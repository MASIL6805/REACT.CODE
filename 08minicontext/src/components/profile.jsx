import React,{useContext} from 'react'
import UserContext from '../context/usercontext';  

function profile() {
    const {user} = useContext(UserContext);
  
    if(!user){
        return <h2>please login</h2>
    }
    return (
    <div>
        <h2>Welcome</h2>
        <h2>Profile</h2>
        <p>username: {user.username}</p>
    </div>
  )
}

export default profile