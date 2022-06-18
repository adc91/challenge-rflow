import React, { Fragment } from "react";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/scss/materialdesignicons.scss";
import "./styles/Weather.scss";

// Logo
import logo from "./assets/img/ow-logo.png";

const Weather = () => {
  return (
    <Fragment>
      <div className="container">
        <header>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <img className="logo" src={logo} alt="Powered by Open Weather" />
            </div>
            <div className="col-md-3"></div>
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
