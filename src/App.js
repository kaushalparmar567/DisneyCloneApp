import React from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Components/Detail'
import LOGIN from './Components/Login.js';


function App() {
  return (
    <div className="App">
     <Router>
         <Header />
              <Switch>
              <Route path="/login">
                    <LOGIN />
                </Route>
                <Route path="/detail">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
              </Switch>
     </Router>
    </div>
  );
}

export default App;
