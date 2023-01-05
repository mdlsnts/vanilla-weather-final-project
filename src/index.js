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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
let day = days[now.getDay()];
let day1 = days[now.getDay() + 1];
let day2 = days[now.getDay() + 2];
let day3 = days[now.getDay() + 3];
let day4 = days[now.getDay() + 4];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}`;

let day1Forecast = document.querySelector("#day1Name");
day1Forecast.innerHTML = `${day1}`;

let day2Forecast = document.querySelector("#day2Name");
day2Forecast.innerHTML = `${day2}`;

let day3Forecast = document.querySelector("#day3Name");
day3Forecast.innerHTML = `${day3}`;

let day4Forecast = document.querySelector("#day4Name");
day4Forecast.innerHTML = `${day4}`;

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

  let temperatureElement = Math.round(response.data.main.temp);
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = `${temperatureElement}`;

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

  celsiusTemperature = response.data.main.temp;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function searchLocation(position) {
  let apiKey = "b79e0a0cc3fca65ee539979ef484d2b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  celsiusConvert.classList.remove("active");
  celsiusConvert.classList.add("inactive");
  fahrenheitConvert.classList.add("active");
  fahrenheitConvert.classList.remove("inactive");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  celsiusConvert.classList.add("active");
  celsiusConvert.classList.remove("inactive");
  fahrenheitConvert.classList.remove("active");
  fahrenheitConvert.classList.add("inactive");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

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

let fahrenheitConvert = document.querySelector("#fahrenheit-convert");
fahrenheitConvert.addEventListener("click", showFahrenheitTemperature);

let celsiusConvert = document.querySelector("#celsius-convert");
celsiusConvert.addEventListener("click", showCelsiusTemperature);

searchCity("Warsaw");
