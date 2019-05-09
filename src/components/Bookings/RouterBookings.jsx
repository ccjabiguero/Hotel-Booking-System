import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateBooking from './CreateBooking.jsx';
import EditBooking from './EditBooking.jsx';
import IndexBooking from './IndexBooking.jsx';
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
                <Link to={'/Bookings'} className="nav-link">Bookings / </Link>
              </li>
              <li className="nav-item">
                <Link to={'/AddBooking'} className="nav-link">Add Booking</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>      
          <Switch>
              <Route exact path='/Bookings' component={ IndexBooking } />
              <Route path='/EditBooking/:id' component={ EditBooking } />
              <Route path='/AddBooking' component={ CreateBooking } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;