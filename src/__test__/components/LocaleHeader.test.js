import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CityPicker from "../../components/CityPicker";
import LocaleHeader from "../../components/LocaleHeader";
import { joinValuesWithSeparator } from "../../utils/strings";
import { cities } from "../../resources/Cities";

const onChange = () => {};
const inProgress = true;

describe("<LocaleHeader />", () => {
  test("Ciudad seleccionada en el <select> coincide con el valor renderizado en el option del componente.", () => {
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

    render(<LocaleHeader city={cities[0]} />);
    expect(screen.getByText(cityLabel)).toHaveTextContent(cityLabel);
  });
});
