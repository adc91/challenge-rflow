import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CityPicker from "../../components/CityPicker";
import { joinValuesWithSeparator } from "../../utils/strings";
import { cities } from "../../resources/Cities";

const onChange = () => {};
const inProgress = true;

describe("<CityPicker />", () => {
  test("Cantidad de elementos en el <select> coincide con la cantidad de elementos en array << cities >>", () => {
    render(
      <CityPicker cities={cities} onChange={onChange} inProgress={inProgress} />
    );

    expect(screen.getAllByRole("option").length).toBe(cities.length);
  });

  test("Opción seleccionada coincide con el valor del <option> element", () => {
    const selected = "1";
    const citySelected = cities[parseInt(selected) - 1];

    let cityLabel = joinValuesWithSeparator(
      ", ",
      citySelected.city,
      citySelected.country
    );

    render(
      <CityPicker cities={cities} onChange={onChange} inProgress={inProgress} />
    );

    userEvent.selectOptions(screen.getByRole("combobox"), [selected]);
    expect(screen.getByRole("option", { name: cityLabel }).selected).toBe(true);
  });
});
