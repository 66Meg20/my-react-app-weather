import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast.js";
import WeatherInfo from "./WeatherInfo.js";
import ReactLoader from "./ReactLoader.js";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=a1184840edbfda3e40off6tdfda47219&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          data={weatherData}
          coordinates={weatherData.coordinates}
        />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <ReactLoader type="spinningBubbles" color="blue" />
      </div>
    );
  }
}
