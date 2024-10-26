import axios from 'axios';

const apiKey = 'ccb640b43fca692750409e741a95d128';
const baseUrl='https://api.openweathermap.org/data/2.5/weather'; // Replace with your actual API key
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Or handle the error appropriately
  }
};

const fetchForecast = async (city) => {
  try {
    const response = await axios.get(
      `${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export default {
  fetchWeather,
  fetchForecast,
};
