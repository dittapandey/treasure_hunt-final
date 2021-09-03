import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Final from "./views/Final";
import Game from "./views/Game";
import Home from "./views/Home";
import SignIn from './views/SignIn';

function App() {
  const [user, setLoginUser]=useState({});
  return (
    <Router>
      <Switch>
        
        <Route exact path = "/home">
          <Home setLoginUser={setLoginUser}/>
        </Route>
        <Route exact path = "/game" >
          {<Game/>}
        </Route>
        <Route exact path = "/final" >
          <Final/>
        </Route>
        <Route exact path = "/signin">
          <SignIn/>
        </Route>
      </Switch>
    </Router>

    
  );
}

export default App;
