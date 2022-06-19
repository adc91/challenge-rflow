import React from "react";

const date = new Date();

const LocaleHeader = ({ city }) => {
  return (
    <div className="weather-date-location">
      <h3>{date.toLocaleDateString("es-ES", { weekday: "long" })}</h3>
      <p className="weather-date text-gray">
        {date.getUTCDate()}{" "}
        <span>{date.toLocaleDateString("es-Es", { month: "long" })}</span>,{" "}
        {date.getFullYear()}
        <br />
        {city.city}
        {city.country.length > 0 && `, ${city.country}`}
      </p>
    </div>
  );
};

export default LocaleHeader;
