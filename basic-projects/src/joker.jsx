import{ useState,useEffect} from 'react';

export default function Joker() {

    const URL = "https://official-joke-api.appspot.com/random_joke";
    //we cannot pass async function to usestate during initialization,if we want joke every time page opens, so we use useEffect
    const getJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    };

        useEffect(()=>{
            async function getfirstjoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({
                setup: jsonResponse.setup,
                punchline: jsonResponse.punchline});
            }
            getfirstjoke();
            },[]);//working only once


        let [Joke, setJoke] = useState({ });
    return (
        <div>
            <h3>Joker</h3>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getJoke}>GetJoke</button>
        </div>
    );
}