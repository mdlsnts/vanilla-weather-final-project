let now = new Date();

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

function currentTime() {
  let now = new Date();
  let hour = now.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let currentHour = document.querySelector("#hours");
  currentHour.innerHTML = `${hour}`;

  let currentMinutes = document.querySelector("#minutes");
  currentMinutes.innerHTML = `${minutes}`;

  setTimeout(function () {
    currentTime();
  }, 1000);
}

function searchCity(city) {
  let apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  searchInput.value = searchInput.value.trim();
  h1.innerHTML = `${(searchInput.value = toUpper(searchInput.value))}`;
  searchCity(searchInput.value);
  celsiusConvert.classList.add("active");
  celsiusConvert.classList.remove("inactive");
  fahrenheitConvert.classList.remove("active");
  fahrenheitConvert.classList.add("inactive");
}

function displayForecast(response) {
  let day1MaxTemperatureElement = Math.round(
    response.data.daily[1].temperature.maximum
  );
  let day1TempMaxElement = document.querySelector("#day1TempMax");
  day1TempMaxElement.innerHTML = `${day1MaxTemperatureElement}°`;

  let day1MinTemperatureElement = Math.round(
    response.data.daily[1].temperature.minimum
  );
  let day1TempMinElement = document.querySelector("#day1TempMin");
  day1TempMinElement.innerHTML = `${day1MinTemperatureElement}°`;

  let day1Humid = response.data.daily[1].temperature.humidity;
  let day1Humidity = document.querySelector("#day1Humidity");
  day1Humidity.innerHTML = `humidity: ${day1Humid}%`;

  let day1WindSpeed = Math.round(response.data.daily[1].wind.speed);
  let day1WindElement = document.querySelector("#day1Wind");
  day1WindElement.innerHTML = `wind: ${day1WindSpeed} km/h`;

  //

  let day2MaxTemperatureElement = Math.round(
    response.data.daily[2].temperature.maximum
  );
  let day2TempMaxElement = document.querySelector("#day2TempMax");
  day2TempMaxElement.innerHTML = `${day2MaxTemperatureElement}°`;

  let day2MinTemperatureElement = Math.round(
    response.data.daily[2].temperature.minimum
  );
  let day2TempMinElement = document.querySelector("#day2TempMin");
  day2TempMinElement.innerHTML = `${day2MinTemperatureElement}°`;

  let day2Humid = response.data.daily[2].temperature.humidity;
  let day2Humidity = document.querySelector("#day2Humidity");
  day2Humidity.innerHTML = `humidity: ${day2Humid}%`;

  let day2WindSpeed = Math.round(response.data.daily[2].wind.speed);
  let day2WindElement = document.querySelector("#day2Wind");
  day2WindElement.innerHTML = `wind: ${day2WindSpeed} km/h`;

  //

  let day3MaxTemperatureElement = Math.round(
    response.data.daily[3].temperature.maximum
  );
  let day3TempMaxElement = document.querySelector("#day3TempMax");
  day3TempMaxElement.innerHTML = `${day3MaxTemperatureElement}°`;

  let day3MinTemperatureElement = Math.round(
    response.data.daily[3].temperature.minimum
  );
  let day3TempMinElement = document.querySelector("#day3TempMin");
  day3TempMinElement.innerHTML = `${day3MinTemperatureElement}°`;

  let day3Humid = response.data.daily[3].temperature.humidity;
  let day3Humidity = document.querySelector("#day3Humidity");
  day3Humidity.innerHTML = `humidity: ${day3Humid}%`;

  let day3WindSpeed = Math.round(response.data.daily[3].wind.speed);
  let day3WindElement = document.querySelector("#day3Wind");
  day3WindElement.innerHTML = `wind: ${day3WindSpeed} km/h`;

  //

  let day4MaxTemperatureElement = Math.round(
    response.data.daily[4].temperature.maximum
  );
  let day4TempMaxElement = document.querySelector("#day4TempMax");
  day4TempMaxElement.innerHTML = `${day4MaxTemperatureElement}°`;

  let day4MinTemperatureElement = Math.round(
    response.data.daily[4].temperature.minimum
  );
  let day4TempMinElement = document.querySelector("#day4TempMin");
  day4TempMinElement.innerHTML = `${day4MinTemperatureElement}°`;

  let day4Humid = response.data.daily[4].temperature.humidity;
  let day4Humidity = document.querySelector("#day4Humidity");
  day4Humidity.innerHTML = `humidity: ${day4Humid}%`;

  let day4WindSpeed = Math.round(response.data.daily[4].wind.speed);
  let day4WindElement = document.querySelector("#day4Wind");
  day4WindElement.innerHTML = `wind: ${day4WindSpeed} km/h`;

  let day1IconElement = document.querySelector("#day1Icon");
  day1IconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[1].condition.icon}.png`
  );

  let day2IconElement = document.querySelector("#day2Icon");
  day2IconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[2].condition.icon}.png`
  );

  let day3IconElement = document.querySelector("#day3Icon");
  day3IconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[3].condition.icon}.png`
  );

  let day4IconElement = document.querySelector("#day4Icon");
  day4IconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[4].condition.icon}.png`
  );
}

function getForecast(coordinates) {
  let apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showTemperature(response) {
  console.log(response.data);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.city}`;

  let temperatureElement = Math.round(response.data.temperature.current);
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = `${temperatureElement}`;

  let feelsLikeElement = Math.round(response.data.temperature.feels_like);
  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = `${feelsLikeElement}°`;

  let humid = response.data.temperature.humidity;
  let humidity = document.querySelector("#currentHumidity");
  humidity.innerHTML = `${humid}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#currentWind");
  windElement.innerHTML = `${windSpeed} km/h`;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  celsiusTemperature = response.data.temperature.current;
  feelsLikeCelsiusTemperature = response.data.temperature.feels_like;

  getForecast(response.data.coordinates);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function searchLocation(position) {
  let apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  let feelsLikeTemperatureElement = document.querySelector("#feelsLike");
  celsiusConvert.classList.remove("active");
  celsiusConvert.classList.add("inactive");
  fahrenheitConvert.classList.add("active");
  fahrenheitConvert.classList.remove("inactive");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  let feelsLikeFahrenheitTemperature =
    (feelsLikeCelsiusTemperature * 9) / 5 + 32;
  feelsLikeTemperatureElement.innerHTML = `${Math.round(
    feelsLikeFahrenheitTemperature
  )}°`;
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  let feelsLikeTemperatureElement = document.querySelector("#feelsLike");
  celsiusConvert.classList.add("active");
  celsiusConvert.classList.remove("inactive");
  fahrenheitConvert.classList.remove("active");
  fahrenheitConvert.classList.add("inactive");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  feelsLikeTemperatureElement.innerHTML = `${Math.round(
    feelsLikeCelsiusTemperature
  )}°`;
}

let celsiusTemperature = null;

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  celsiusConvert.classList.add("active");
  celsiusConvert.classList.remove("inactive");
  fahrenheitConvert.classList.remove("active");
  fahrenheitConvert.classList.add("inactive");
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

setInterval(showTemperature, 60000);
