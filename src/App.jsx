import './App.css'
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Navbar from './Component/Navbar/Navbar'
import Searchbar from './Component/Searchbar/Searchbar'
import DateTimeLocation from './Component/DateTimeLocation/DateTimeLocation'
//import Container  from './Component/Container/Container';


function App() {

  return (
    <div className='bg-blue-500 pb-2 font-serif'>
    <Navbar/>
    <Searchbar/>
    <DateTimeLocation/>
    
    </div>
  )
}

export default App
