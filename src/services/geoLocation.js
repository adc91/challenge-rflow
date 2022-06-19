export const getLocation = () =>
  new Promise((resolve, reject) => {
    const success = (position) => resolve(position);
    const error = (error) => reject(error);

    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(success, error)
      : reject({
          cod: 500,
          message: "La Geolocalización no está activa en este navegador.",
        });
  });
