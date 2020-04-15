import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";

const WeatherCard = (props) => {
  let highColor = (1 - (props.temp - 12) / 28) * 255;
  let lowColor = highColor - 150;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top,
      rgba(255, ${highColor}, 0),
      rgba(255, ${lowColor}, 0)
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <img
        className="icon"
        src="./img/Mostly Cloudy-2x.png"
        alt="Weather Icon"
      />
      <h1 className="temp">20 C</h1>
      <h3 className="condition">Clouds</h3>
    </Card>
  );
};

export default WeatherCard;
