import React from "react";

import WeatherIcon from "../weather/WeatherIcon";
import { capitalizeFirstLetter } from "../../utils/strings";

const CardItem = ({ temperature, day, weather }) => {
  return (
    <div className="weakly-weather-item">
      <p className="mb-0 text-capitalize">
        <MakeDay day={day} />
      </p>
      <hr />
      <p className="mb-0">Mín: {Math.round(temperature.min)}&deg;</p>
      <p className="mb-0">Máx: {Math.round(temperature.max)}&deg;</p>
      <hr />
      <p className="mb-0">
        <WeatherIcon {...weather[0]} />
      </p>
      <p className="mb-0">{capitalizeFirstLetter(weather[0].description)}</p>
    </div>
  );
};

const MakeDay = ({ day }) => {
  let date = new Date();
  date.setDate(date.getDate() + (day + 1));

  return date.toLocaleDateString("es-ES", { weekday: "long" });
};

export default CardItem;
