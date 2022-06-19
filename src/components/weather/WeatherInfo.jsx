import React, { Fragment } from "react";

const WeatherInfo = ({ current }) => {
  return (
    <Fragment>
      <h4 className="display-3">
        {current ? Math.round(current.temp) : "--"}
        <span className="symbol">&deg;</span>C
      </h4>
      {current ? (
        <p>
          <span className="text-capitalize">
            {current.weather[0].description}
          </span>
          <br />
          Humedad del {current.humidity}%
          <br />
          Presión atmosférica de {current.pressure}hPa
        </p>
      ) : (
        <p>Obteniendo información...</p>
      )}
    </Fragment>
  );
};

export default WeatherInfo;
