import React, { useState } from "react";
import Search from '../assets/search.svg'

const apiKEY = "d23ceedaafc542138ca120859242302";

function Weather() {
  const [city, setCity] = useState("Mumbai"); 
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!city.trim()) {
        setError("Please enter a city name.");
        return; 
      }

      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKEY}&q=${city}`
      );

      const weatherData = await response.json();
      setWeatherData(weatherData);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="body">
      <div id="nav">
        <div id="div1">
          <h1 id="name">Weather App</h1>
        </div>

        <div>
          <input
            id="inputBox"
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button id="searchBtn" onClick={getWeatherData}>
            <img src={Search} alt="Search Icon" />
          </button>
        </div>
      </div>

      <div id="data">
        {weatherData && (
          <div id="details">
            <img
              id="weatherImg"
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
            />
          </div>
        )}

        {weatherData && (
          <div id="weather">
            <h2>City: {weatherData.location.name}</h2>
            <h2>State: {weatherData.location.region}</h2>
            <h2>Country: {weatherData.location.country}</h2>
            <h2>Local Time: {weatherData.location.localtime}</h2>
            <h2>Time Zone: {weatherData.location.tz_id}</h2>
          </div>
        )}

        {weatherData && (
          <div id="weatherdata2">
            <h2>Condition: {weatherData.current.condition.text}</h2>
            <h2>Temperature: {weatherData.current.temp_c} °C</h2>
            <h2>Wind Speed: {weatherData.current.wind_kph} Km/h</h2>
            <h2>Humidity: {weatherData.current.humidity} %</h2>
            <h2>
              Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}
            </h2>
            <h2>Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</h2>
          </div>
        )}
      </div>

      
    </div>
  );
}

export default Weather;