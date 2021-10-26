import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Components/Home";
import Search from "./Components/Search";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' exact component={Search} />
      </Switch>
    </Router>
  );
};
export default App;