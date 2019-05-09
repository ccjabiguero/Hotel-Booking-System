import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateRoom from './CreateRoom.jsx';
import EditRoom from './EditRoom.jsx';
import IndexRoom from './IndexRoom.jsx';
import {Nav} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/Rooms'} className="nav-link">Rooms / </Link>
              </li>
              <li className="nav-item">
                <Link to={'/AddRoom'} className="nav-link">Add room type</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
          
          <Switch>
              <Route exact path='/Rooms' component={ IndexRoom } />
              <Route path='/EditRoom/:id' component={ EditRoom } />
              <Route path='/AddRoom' component={ CreateRoom } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;