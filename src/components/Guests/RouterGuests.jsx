import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateGuest from './CreateGuest.jsx';
import EditGuest from './EditGuest.jsx';
import IndexGuest from './IndexGuest.jsx';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/Guests'} className="nav-link">Guests / </Link>
              </li>
              <li className="nav-item">
                <Link to={'/AddGuest'} className="nav-link">Add Guest</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        
        <Switch>
            <Route exact path='/Guests' component={ IndexGuest } />
            <Route path='/EditGuest/:id' component={ EditGuest } />
            <Route path='/AddGuest' component={ CreateGuest } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;