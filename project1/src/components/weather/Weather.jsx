import { useEffect, useState } from "react"
import Search from "./Search"

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState("")

    async function fetchWeatherData(getSearch) {
        try {
            setLoading(true);
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2a9961d4c47149d2849134552241802&q=${getSearch}`);
            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error.message);
        }
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData("Bangalore");
        //eslint-disable-next-line
    }, [])

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday : 'long',
            month : 'long',
            day : 'numeric',
            year : 'numeric'
        });
    }
    console.log(weatherData);


    return (
        <div className="container mt-3 d-flex align-items-center flex-column" style={{
            backgroundColor: "wheat",
            padding : "0.4rem"
        }}>
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            {
                error !== "" ? <p>Error : {error}</p> : null
            }
            {
                loading ? <p>Loading... Please Wait!</p> : null
            }
            
            <div className="weather-details d-flex flex-column justify-content-center align-items-center">
                <div className="city-name">
                    <p className="d-inline-flex">{weatherData?.location?.name}</p> <span>{weatherData?.location?.country}</span>
                </div>
                <div className="date">
                    <h4>{getCurrentDate()}</h4>
                </div>
                <div className="weather-temp">
                    <p className="d-inline-flex">Temp<strong>: {weatherData?.current?.temp_f}&deg;F </strong>|<strong>{weatherData?.current?.temp_c}&deg;C </strong></p> <h4>{weatherData?.current?.condition?.text}</h4>
                </div>
                <div className="weather-wind">
                <p className="d-inline-flex">Wind<strong>: {weatherData?.current?.wind_kph} kph W {weatherData?.current?.wind_degree}&deg; </strong></p>
                </div>
            </div>

        </div>
    )
}

export default Weather
