let data = {
  coord: { lon: 15.76, lat: 50.78 },
  weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
  base: "stations",
  main: {
    temp: 275.437,
    pressure: 968.16,
    humidity: 97,
    temp_min: 275.437,
    temp_max: 275.437,
    sea_level: 1018.85,
    grnd_level: 968.16
  },
  wind: { speed: 6.24, deg: 254.001 },
  rain: { "3h": 0.4075 },
  clouds: { all: 64 },
  dt: 1546935582,
  sys: {
    message: 0.0026,
    country: "PL",
    sunrise: 1546930632,
    sunset: 1546960225
  },
  id: 3096576,
  name: "Karpacz",
  cod: 200
};

const api = "ed8301c514c334528d0c0cf596aff080";

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response.json();
// }
// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=kaunas&appid=ed8301c514c334528d0c0cf596aff080&units=metric"
// )
//   .then(handleErrors)
//   .then(response => console.log("ok", response))
//   .catch(error => console.log(error));

////

// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=karpacz&appid=ed8301c514c334528d0c0cf596aff080&units=metric"
// )
//   .then(response => response.json())
//   .then(response => console.log("ok", response))
//   .catch(error => console.log(error));
