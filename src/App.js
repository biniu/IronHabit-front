import React,{Component} from 'react';
import Dashboard from './Dashboard/Dashboard'
import LoginPage from './LoginPage/login'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/sidebar.css'




class App extends Component {
  render() {
    return (
      <div id="pageContent">
      <Router>
        <Route exact path = "/">
          <LoginPage/>
        </Route>
        <Route exact path = "/dashboard">
          <Dashboard/>
        </Route>
        
      </Router>
        
      </div>
    );
  }
}

export default App;
