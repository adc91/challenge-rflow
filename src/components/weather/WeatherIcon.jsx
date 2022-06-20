import React from "react";

import { ICON_URL } from "../../vars/openWeather";

const WeatherIcon = ({ icon, description }) => {
  console.log(icon, description);
  return <img src={`${ICON_URL}/${icon}.png`} alt={description} />;
};

export default WeatherIcon;
