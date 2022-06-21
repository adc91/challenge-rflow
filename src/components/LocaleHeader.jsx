import React from "react";

import { joinValuesWidthSeparator } from "../utils/strings";

const date = new Date();

const LocaleHeader = ({ city }) => {
  const locale = joinValuesWidthSeparator(", ", city.city, city.country);

  return (
    <div className="weather-date-location">
      <h3>{date.toLocaleDateString("es-ES", { weekday: "long" })}</h3>
      <p className="weather-date text-gray">
        {date.getUTCDate()}{" "}
        <span>{date.toLocaleDateString("es-Es", { month: "long" })}</span>,{" "}
        {date.getFullYear()}
        <br />
        {locale}
      </p>
    </div>
  );
};

export default LocaleHeader;
