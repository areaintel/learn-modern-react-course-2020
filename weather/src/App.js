import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="sydney, au" />
      <WeatherEngine location="melton, au" />
    </div>
  );
}

export default App;
