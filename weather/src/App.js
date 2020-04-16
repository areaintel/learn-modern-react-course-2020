import React, { useState, useEffect } from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Sydney, au");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  //read API key from local .env file
  //https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app

  // main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  // main.feels_like Temperature. This temperature parameter accounts for the human

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${API_KEY}`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  //console.log(data());

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
  };

  // runs only once when component is mounted
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
  }, []);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      {/* <WeatherCard temp={20} condition="Clouds" city="Melbourne" country="AU" />
      <WeatherCard temp={40} condition="Tornado" city="London" country="GB" />
      <WeatherCard temp={10} condition="Clear" city="Sandpoint" country="US" /> */}
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
