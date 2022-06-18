import React, { Fragment, useState } from "react";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/scss/materialdesignicons.scss";
import "./styles/Weather.scss";

// Logo
import logo from "./assets/img/ow-logo.png";

// Components
import CityPicker from "./components/CityPicker";

// Resources
import { cities } from "./resources/Cities";

const Weather = () => {
  const [city, setCity] = useState(cities[0]);
  const [inProgress, setProgress] = useState(false);

  const onChange = (cityId) => {
    setCity(cities[cityId]);
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <img className="logo" src={logo} alt="Powered by Open Weather" />
            </div>
            <div className="col-md-3">
              <CityPicker
                cities={cities}
                inProgress={inProgress}
                onChange={onChange}
              />
            </div>
          </div>
        </header>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 grid-margin stretch-card">
            <div className="card card-weather">
              <div className="card-body"></div>
              <div className="card-body p-0">
                <div className="d-flex weakly-weather"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Weather;
