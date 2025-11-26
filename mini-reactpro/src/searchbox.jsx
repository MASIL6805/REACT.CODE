import{ useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "d5ef2a80bb6ea217640d5b6fd8e7239a";

    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    let getWeather = async (city) => {
    try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
            let jsonresponse = await response.json();
            console.log(jsonresponse);

            if (!response.ok) {
           throw new Error(jsonresponse.message || "City not found");
            }



            let result = {
                city: city,
                temp: jsonresponse.main.temp,
                temp_min: jsonresponse.main.temp_min,
                temp_max: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                feelslike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description,
            }

         console.log(result);
         return result
        }catch(error) {
           throw error;
        }
        
    };
        let handleChange = (e) => {
            setCity(e.target.value);
        }
        
        let handleSubmit = async (e) => {
            e.preventDefault();
            try{
                setError(false); // Reset error state before fetching
                console.log(`Searching weather for ${city}`);
                let newinfo = await getWeather(city); // Call the function to fetch weather data
                updateInfo(newinfo); // Update the parent component with the new weather info
                setCity(''); // Clear the input after submission

        }catch(error) {
            setError(true);
        }
    };
    
    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit} >
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
               <br />
                <Button variant="contained" type='submit'>Search</Button> 
                {error && <p style={{color:"red"}}>Error fetching weather data.No such Place available. Please try again.</p>}
            </form>
        </div>
    )
}