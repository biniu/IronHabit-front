import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalCSS/App.css';
import QuestsMainSite from './SubSites/Quests/QuestsMainSite'

/**
 * render whole page
 * @return {*}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <QuestsMainSite />
        </Route>
      </Router>
    </div>
  );
}

export default App;
