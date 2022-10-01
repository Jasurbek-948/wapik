import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Feature from './components/Feature/Feature'
import Templete from './components/Templete/Templete';
import Map from "./components/Map/Map";
import Price from "./components/Price/Price";
import Download from "./components/Download/Download";
import Wapik from "./components/wapik/Wapik";

function App() {
  return (
    <div className="App">
      <div className='head'>
        <Header />
        <MainPage />
      </div>
      <div className="feature">
        <Feature />
      </div>
      <div className='templete'>
        <Templete />
      </div>
        <Map/>
        <Price />
      <Download/>
        <Wapik/>
      
      
    </div>
  );
}

export default App;
