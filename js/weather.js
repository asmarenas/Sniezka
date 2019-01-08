let dataSample = {
  coord: {
    lon: 15.76,
    lat: 50.78
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d"
    }
  ],
  base: "stations",
  main: {
    temp: 1.75,
    pressure: 961.72,
    humidity: 97,
    temp_min: 1.75,
    temp_max: 1.75,
    sea_level: 1012.11,
    grnd_level: 961.72
  },
  wind: {
    speed: 8.35,
    deg: 256.502
  },
  rain: {
    "3h": 1.4725
  },
  clouds: {
    all: 92
  },
  dt: 1546954276,
  sys: {
    message: 0.0027,
    country: "PL",
    sunrise: 1546930626,
    sunset: 1546960243
  },
  id: 3096576,
  name: "Karpacz",
  cod: 200
};

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=karpacz&appid=ed8301c514c334528d0c0cf596aff080&units=metric"
)
  .then(handleErrors)
  .then(response => displayWeather(response))
  .catch(error => console.log(error));

// display values

function displayWeather(response) {
  let spanTag = "<span> &#x2103; </span>";
  let icon;

  switch (response.weather[0].main) {
    case "Rain":
    case "Drizzle":
    case "Atmosphere":
      icon = "./img/icons/rain.png";
      break;
    case "Thunderstorm":
      icon = "./img/icons/storm.png";
      break;
    case "Clear":
      icon = "./img/icons/sun.png";
      break;
    case "Clouds":
      icon = "./img/icons/clouds.png";
      break;
    case "Snow":
      icon = "./img/icons/snow.png";
      break;
    default:
      icon = "empty";
  }

  document.querySelector(".time").innerHTML = new Date();
  document.querySelector(".temperature").innerHTML =
    Math.round(response.main.temp) + spanTag;
  document.querySelector(".weather-info").innerHTML =
    response.weather[0].description;
  document.querySelector(".weather-icon").src = icon;
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}
