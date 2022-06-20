import React from "react";

import CardItem from "./cards/CardItem";
import CardItemLoad from "./cards/CardItemLoad";

// Arr con la cantidad de cards 'loading' a mostrar
const itemsLoad = [1, 2, 3, 4, 5];

const Cards = ({ data }) => {
  let { daily, cod } = data;

  if (daily) daily.shift();

  return daily
    ? daily.map((value, key) => {
        return <CardItem key={key} day={key} temperature={value.temp} />;
      })
    : cod // Puntero para evaluación de error de API
    ? null
    : itemsLoad.map((value) => {
        return <CardItemLoad key={value} />;
      });
};

export default Cards;
