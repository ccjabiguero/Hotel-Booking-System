import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow.jsx';
import {Container, Row, Col} from 'react-bootstrap'
export default class IndexBooking extends Component {

  constructor(props) {
      super(props);
      this.state = {bookings: []};
    }
    componentDidMount(){
      this._refresh();
      this.refs.search.focus();
    }
    tabRow(){
      return this.state.bookings.map(function(booking, i){
          return <TableRow booking={booking} key={i} />;
      });
    }
    _refresh(){
        axios.get('http://localhost:8080/HotelBooking/rest/bookings')
        .then(response => {
          this.setState({ bookings: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        
    }
    clicked = () => {
      axios.get("http://localhost:8080/HotelBooking/rest/bookings?firstName="+this.refs.search.value).then((response)=>{
      console.log(response.data)
      this.setState({ 
      bookings:response.data });
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Booking List</h3>
          <Container>
            <Row>
            <Col md={4}>
              <div className="input-container">
                <i className="material-icons">search</i>
                <input type="text"
                      ref="search"
                      placeholder="type name here"
                  />
                <button className="btn btn-primary"onClick={this.clicked}>Search</button> 
              </div> 
            </Col>
            <Col md={{  span:2 ,offset: 6 }}>
              <Link to={"/AddBooking"} className="btn btn-primary">Add Booking</Link>
            </Col>
            </Row>
          </Container>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guests</th>
                <th>Room ID</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Total Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }