import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=a1184840edbfda3e40off6tdfda47219&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast=icon">
            <img
              src={props.data.iconUrl}
              alt="weather-icon"
              className="WeatherForecast-icon"
            />
          </div>

          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
