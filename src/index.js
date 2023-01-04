let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (hour < 10) {
  hour = "0" + hour;
}
let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}`;

let currentHour = document.querySelector("#hours");
currentHour.innerHTML = `${hour}`;

let currentMinutes = document.querySelector("#minutes");
currentMinutes.innerHTML = `${minutes}`;

function searchCity(city) {
  let apiKey = "b79e0a0cc3fca65ee539979ef484d2b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${(searchInput.value = toUpper(searchInput.value))}`;
  searchCity(searchInput.value);
}

function showTemperature(response) {
  console.log(response.data.weather[0].description);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;

  let celsiusTemperature = Math.round(response.data.main.temp);
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = `${celsiusTemperature}°`;

  let temp_max = Math.round(response.data.main.temp_max);
  let highTemp = document.querySelector("#currentHigh");
  highTemp.innerHTML = `${temp_max}°`;

  let temp_min = Math.round(response.data.main.temp_min);
  let lowTemp = document.querySelector("#currentLow");
  lowTemp.innerHTML = `${temp_min}°`;

  let humid = response.data.main.humidity;
  let humidity = document.querySelector("#currentHumidity");
  humidity.innerHTML = `${humid}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#currentWind");
  windElement.innerHTML = `${windSpeed} km/h`;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

searchCity("Warsaw");

function searchLocation(position) {
  let apiKey = "b79e0a0cc3fca65ee539979ef484d2b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#current-button");
currentLocation.addEventListener("click", getCurrentLocation);

function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}
