import { API_URL, API_KEY } from "../vars/openWeather";

export const makeAPILink = ({ lat, log }) =>
  `${API_URL}?lat=${lat}&lon=${log}&units=metric&appid=${API_KEY}&lang=es`;

export const fetchAPIData = async ({ lat, log }) => {
  try {
    const response = await fetch(
      makeAPILink({
        lat,
        log,
      })
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
