npx create-react-app weather-forecast-app



import React, { useEffect, useState } from 'react';

const WeatherForecast = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { temp_c, humidity, wind_kph, condition } = weatherData.current;

  return (
    <div>
      <h2>Weather Forecast for {location}</h2>
      <p>Temperature: {temp_c}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind_kph} km/h</p>
      <p>Description: {condition.text}</p>
    </div>
  );
};

export default WeatherForecast;





import React from 'react';
import WeatherForecast from './WeatherForecast';

const App = () => {
  return (
    <div>
      <WeatherForecast location="New York" />
    </div>
  );
};

export default App;
