import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Searchbar from './Component/Searchbar/Searchbar'
import DateTimeLocation from './Component/DateTimeLocation/DateTimeLocation'
import Container  from './Component/Container/Container';
import getWeatherData from './Services/Weatherservices';
import './assets/clear.jpg'


function App() {

  const fetchWeather=async()=>{
    const data=await getWeatherData("weather",{q:"Pune"});
    console.log(data);
  };

  fetchWeather();
  return (
    <div className="bg-[url('./assets/clear.jpg')] bg-cover bg-center bg-no-repeat pb-12 font-serif">
    <Navbar/>
    <Searchbar/>
    <DateTimeLocation/>
    <Container/>
    </div>
  )
}

export default App
