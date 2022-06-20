import React, { Fragment } from "react";

import WeatherIcon from "./WeatherIcon";

const WeatherInfo = ({ current }) => {
  return (
    <Fragment>
      <h4 className="display-3">
        {current ? Math.round(current.temp) : "--"}
        <span className="symbol">&deg;</span>C
      </h4>
      {current ? (
        <Fragment>
          <WeatherIcon {...current.weather[0]} />
          <p>
            <span className="text-capitalize">
              {current.weather[0].description}
            </span>
            <br />
            Humedad del {current.humidity}%
            <br />
            Presión atmosférica de {current.pressure}hPa
          </p>
        </Fragment>
      ) : (
        <p>Obteniendo información...</p>
      )}
    </Fragment>
  );
};

export default WeatherInfo;
