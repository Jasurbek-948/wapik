import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Feature from './components/Feature/Feature'

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
      
      
    </div>
  );
}

export default App;
