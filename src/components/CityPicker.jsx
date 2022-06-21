import React from "react";

import { joinValuesWithSeparator } from "../utils/strings";

const CityPicker = ({ cities, onChange, inProgress }) => {
  const onChangeEvent = (event) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="form-select"
      onChange={onChangeEvent}
      disabled={inProgress ? "disbled" : ""}
      aria-label="Seleccione una ubicación"
    >
      <Option cities={cities} />
    </select>
  );
};

const Option = ({ cities }) => {
  return cities.map((value, key) => {
    const label = joinValuesWithSeparator(", ", value.city, value.country);

    return (
      <option key={key} value={value.id}>
        {label}
      </option>
    );
  });
};

export default CityPicker;
