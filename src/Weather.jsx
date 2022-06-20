import React, { Fragment, useState, useEffect, useCallback } from "react";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/scss/materialdesignicons.scss";
import "./styles/Weather.scss";

// Logo
import logo from "./assets/img/ow-logo.png";

// Components
import Cards from "./components/Cards";
import CityPicker from "./components/CityPicker";
import LocaleHeader from "./components/LocaleHeader";
import WeatherCurrent from "./components/WeatherCurrent";

// Services
import { fetchAPIData } from "./services/api";
import { getLocation } from "./services/geoLocation";

// Resources
import { cities } from "./resources/Cities";

const Weather = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState(cities[0]);
  const [inProgress, setProgress] = useState(false);

  const fetch = useCallback((lat, log) => {
    makeSetWorking();

    fetchAPIData({
      lat: lat,
      log: log,
    }).then((response) => {
      setData(response);
      setProgress(false);
    });
  }, []);

  const onChange = (cityId) => {
    makeSetWorking();

    if (parseInt(cityId) !== 5) {
      setCity(cities[cityId]);
    } else {
      getLocation()
        .then((response) => {
          const { coords } = response;
          const citySelected = cities[cityId];

          setCity({
            ...citySelected,
            lat: coords.latitude,
            log: coords.longitude,
          });
        })
        .catch((err) => {
          setData({ cod: 500, message: err.message });
          setProgress(false);
        });
    }
  };

  const makeSetWorking = () => {
    setData({});
    setProgress(true);
  };

  useEffect(() => {
    fetch(city.lat, city.log);
  }, [fetch, city]);

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
              <div className="card-body">
                <LocaleHeader city={city} />
                <WeatherCurrent data={data} />
              </div>
              <div className="card-body p-0">
                <div className="d-flex weakly-weather">
                  <Cards data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Weather;
