import './App.css'
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Navbar from './Component/Navbar/Navbar'
import Searchbar from './Component/Searchbar/Searchbar'
import DateTimeLocation from './Component/DateTimeLocation/DateTimeLocation'
import Container  from './Component/Container/Container';
import './assets/clear.jpg'


function App() {

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
