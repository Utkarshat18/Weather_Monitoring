// //https://api.openweathermap.org/data/2.5/weather?q=pune&appid=ccb640b43fca692750409e741a95d128
// //https://api.openweathermap.org/data/2.5/weather?lat=18.827&lon=9.28973&appid=ccb640b43fca692750409e741a95d128
// import {DateTime} from "luxon";
// const API_KEY="ccb640b43fca692750409e741a95d128";
// const BASE_URL="https://api.openweathermap.org/data/2.5";

// const getWeatherData=(infoType,searchParams)=>{
//     const url=new URL(BASE_URL+"/"+infoType);
//     url.search=new URLSearchParams({...searchParams, appid:API_KEY});

//     console.log(url)
//     return fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>data);
// };

// const formatcurrentWeather=(data)=>{
//     const{
//         coord:{lat,lon},
//         main : {temp,feels_like,temp_min,temp_max,humidity},
//         name,
//         dt,
//         sys:{country,sunrise,sunset},
//         weather,
//         wind:{speed}
//     }=data
//     const {main:details,icon}=weather[0]

//     return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed}
// }

// const getformattedweatherdata=async(searchParams)=>{
//     const formattedcurrentWeather=await getWeatherData('weather',searchParams).then(formatcurrentWeather)
//     return formattedcurrentWeather;
// }
// const formatToLocalTime=(secs,zone,format="cccc,dd LLL yyyy' | Local time: 'hh:mm a")=>
//     DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// export default getformattedweatherdata;

import axios from 'axios'; // You can use fetch if preferred

const apiKey = 'ccb640b43fca692750409e741a95d128'; // Replace with your actual API key

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Or handle the error appropriately
  }
};

export default {
  fetchWeather,
};