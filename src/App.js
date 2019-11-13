import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Import all sub sites
// Main sites
import LoginPage from './LoginPage/login'
import Dashboard from './Dashboard/Dashboard'

// Sub sites
import Projects from './SubSites/Projects/Projects'
import Tasks from './SubSites/Tasks/Tasks'
import Habits from './SubSites/Habits/Habits'
import Dailies from './SubSites/Dailies/Dailies'

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import local CSS files
import './css/App.css';
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
