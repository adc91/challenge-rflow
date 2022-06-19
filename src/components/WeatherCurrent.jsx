import React from "react";

import WeatherInfo from "./weather/WeatherInfo";
import WeatherError from "./weather/WeatherError";

const WeatherCurrent = ({ data }) => {
  const { current, cod } = data;

  return (
    <div className="weather-data d-flex">
      <div className="mr-auto">
        {cod ? <WeatherError /> : <WeatherInfo current={current} />}
      </div>
    </div>
  );
};

export default WeatherCurrent;
