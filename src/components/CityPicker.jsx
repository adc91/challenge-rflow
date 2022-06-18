import React from "react";

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
    return (
      <option key={key} value={value.id}>
        {value.city}
        {value.country.length > 0 && ` - ${value.country}`}
      </option>
    );
  });
};

export default CityPicker;
