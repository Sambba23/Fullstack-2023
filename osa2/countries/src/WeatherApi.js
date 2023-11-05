import React, { useState, useEffect } from 'react';



const WeatherApi = ({ city }) => {
  const [weather, setWeather] = useState({ temp: null, wind: null, icon: null });
  const api_key = process.env.REACT_APP_API_KEY
  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        console.error('No city provided for the API call');
        return;
      }
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.main && data.wind && data.weather && data.weather.length > 0) {
          setWeather({
            temp: data.main.temp,
            wind: data.wind.speed,
            icon: data.weather[0].icon 
          });
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]); 

  return (
    <div>
      <h1>Weather in {city}</h1>
      {weather.icon && (
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" />
      )}
      {weather.temp !== null && (
        <p>Temperature: {weather.temp}°C</p> 
      )}
      {weather.wind !== null && (
        <p>Wind speed: {weather.wind} m/s</p>
      )}
    </div>
  );
}

export default WeatherApi;
