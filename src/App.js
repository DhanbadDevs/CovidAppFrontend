import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App" style={{minHeight:'100vh'}}>
    <HomePage/>
    </div>
  );
}

export default App;
