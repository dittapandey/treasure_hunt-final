import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useContext } from "react";
import './App.css';
import Final from "./views/Final";
import Game from "./views/Game";
import Home from "./views/Home";
import SignIn from './views/SignIn';
import AppContext from "./AppContext";

function App() {
  const [user, setLoginUser] = useState({});
  const userSettings = {
    user: user,
    setLoginUser
  }
  const myContext = useContext(AppContext);
  return (
    <AppContext.Provider value={userSettings}>
    <Router>
      <Switch>
        
        <Route exact path = "/home">
         {user?<Game/>:<Home setLoginUser={setLoginUser}/>}
        </Route>
        <Route exact path = "/game" >
          
          {user?<Game/>: <Home/>}
        </Route>
        <Route exact path = "/final" >
          {user?<Final/>:<Home/>}
        </Route>
        <Route exact path = "/signin">
          { <SignIn/>}
    
        </Route>
      </Switch>
    </Router>
  </AppContext.Provider>
    

    
  );
}

export default App;
