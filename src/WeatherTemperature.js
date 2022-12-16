import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
