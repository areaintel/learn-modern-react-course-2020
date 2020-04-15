import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,gb&units=metric&APPID=YOURKEYHERE"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  //console.log(data());
  data().then((res) => {
    console.log("the feels like is" + res.main.feels_like);
    console.log("the temp is " + res.main.temp);
  });

  return (
    <div className="App">
      <WeatherCard temp={-5} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={20} condition="Clouds" city="Melbourne" country="AU" />
      <WeatherCard temp={40} condition="Tornado" city="London" country="GB" />
    </div>
  );
}

export default App;
