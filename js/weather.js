fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=karpacz&appid=ed8301c514c334528d0c0cf596aff080&units=metric"
)
  .then(handleErrors)
  .then(response => displayWeather(response))
  .catch(error => {
    displayError();
    console.log(error);
  });

// display values
displayWeather(response);
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
      icon = "./img/icons/clouds.png";
  }

  document.querySelector(".time").innerHTML = moment(new Date()).format(
    "h:mm a dddd MMMM Do"
  );
  document.querySelector(".temperature").innerHTML =
    Math.round(response.main.temp) + spanTag;
  document.querySelector(".weather-info").innerHTML =
    response.weather[0].description;
  document.querySelector(".weather-icon").src = icon;
  // show weather box
  document.querySelector(".weather-box").classList.add("show-box");
}

// Handling errors

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

function displayError() {
  document.querySelector(".error-message").classList.add("show-box");
}
