import React from "react";

const CardItem = ({ temperature, day }) => {
  return (
    <div className="weakly-weather-item">
      <p className="mb-0 text-capitalize">
        <MakeDay day={day} />
      </p>
      <i className={`mdi mdi-weather-cloudy`}></i>
      <p className="mb-0">Mín: {Math.round(temperature.min)}&deg;</p>
      <p className="mb-0">Máx: {Math.round(temperature.max)}&deg;</p>
    </div>
  );
};

const MakeDay = ({ day }) => {
  let date = new Date();
  date.setDate(date.getDate() + (day + 1));

  return date.toLocaleDateString("es-ES", { weekday: "long" });
};

export default CardItem;
