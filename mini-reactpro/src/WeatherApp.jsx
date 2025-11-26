import SearchBox from "./searchbox";
import InfoBox from "./infobox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState( {
        city: "Delhi",
        feelslike: 27.05,
        temp: 25.25,
        temp_min: 24.0,
        temp_max: 26.0,
        humidity: 60,
        weather: "clear sky"
});

let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    return (
        <div className='weather-app' style={{ textAlign: 'center'}}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateWeatherInfo}/>
            <InfoBox Info={weatherInfo} />
        </div>
    );
}