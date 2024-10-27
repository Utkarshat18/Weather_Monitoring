import axios from 'axios';

// const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl='https://api.openweathermap.org/data/2.5/weather'; // Replace with your actual API key
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${baseUrl}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
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
      `${forecastUrl}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
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
