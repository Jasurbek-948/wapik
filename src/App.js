import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Feature from './components/Feature/Feature'
import Templete from './components/Templete/Templete';
import Map from "./components/Map/Map";

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
      
      
      
    </div>
  );
}

export default App;
