//import logo from './logo.svg';
import './App.css';
import Header from '../src/header/header';
import Navbar from './nav-bar/nav-bar';
import Props from './content/props';
import Fooder from './fooder/fooder';
import State from './state';

function App() {
  return (
    <div><Header/>
    <Navbar/> 
    <Props/>
    <Fooder/>
    <State/>
    </div>
  )
}

export default App;
