import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Game from "./views/Game";
import Home from "./views/Home";
import SignIn from './views/SignIn';

function App() {
  return (
    <Game/>
    
  );
}

export default App;
