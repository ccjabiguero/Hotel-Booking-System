import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RouterBookings from './components/Bookings/RouterBookings.jsx';
import RouterRooms from './components/Rooms/RouterRooms.jsx';
import RouterGuests from './components/Guests/RouterGuests.jsx'
import Home from './components/Home.jsx';
import Notfound from './notfound.jsx'
import MaterialIcon from 'material-icons-react'
class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="sidebar">
          
        
                  <Link to={'/'} className="nav-link">
                  <MaterialIcon icon="home" size='50px'color='#303952'/>
                  <p className="iconlabel">Home</p>
                  </Link>
                  <hr/>
                  <Link to={'/Bookings'} className="nav-link">
                  <MaterialIcon  icon="book" size='49px'color='#303952'/>                  
                  <p className="iconlabel">Bookings</p>
                  </Link>
                  <hr/>
                  <Link to={'/Rooms'} className="nav-link">
                  <MaterialIcon  icon="vpn_key" size='50px'color='#303952'/>
                  <p className="iconlabel">Rooms</p>
                  </Link>
                  <hr/>
                  <Link to={'/Guests'} className="nav-link">
                  <MaterialIcon  icon="person" size='50px'color='#303952'/>
                  <p className="iconlabel">Guests</p>
                  </Link>
                
          </div>
          <div className="main">
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/Bookings' component={ RouterBookings } />
              <Route path='/Rooms' component={ RouterRooms } />
              <Route path='/Guests' component={ RouterGuests } />
              <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;