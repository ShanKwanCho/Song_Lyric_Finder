import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';


import './App.css';
import {Provider} from './context';

class App extends Component { 
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />  {/* route for the lyrics from Lyrics.js  */}
              </Switch>
            </div>
        </React.Fragment>
      </Router>
      </Provider>
      );
  }
} 

export default App;
 