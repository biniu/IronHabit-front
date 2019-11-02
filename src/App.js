import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard'
import Projects from './Projects/Projects'
import Tasks from './Tasks/Tasks'
import Habits from './Habits/Habits'
import Dailies from './Dailies/Dailies'
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
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/habits">
            <Habits />
          </Route>
          <Route exact path="/dailies">
            <Dailies />
          </Route>
        </Router>

      </div>
    );
  }
}

export default App;
