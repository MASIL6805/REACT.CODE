import { useState,useEffect } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1);
    
    }


    useEffect(function printCount() {
        console.log("Count has changed to:", count);
    },[count]); // This will run every time 'count' changes
    //[ ] // This will run only once when the component mounts
    // ifyou have multiple dependencies, you can list them like this: [dep1, dep2]




    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}