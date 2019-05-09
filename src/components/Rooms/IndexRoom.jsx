import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow.jsx';
import {Container, Row, Col} from 'react-bootstrap'
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {rooms: []};
    }
    componentDidMount(){
      this._refresh();
      this.refs.search.focus();
    }
    tabRow(){
      return this.state.rooms.map(function(room, i){
          return <TableRow room={room} key={i} />;
      });
    }
    _refresh(){
        axios.get('http://localhost:8080/HotelBooking/rest/rooms')
        .then(response => {
          this.setState({ rooms: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        
    }
    clicked = () => {
      axios.get("http://localhost:8080/HotelBooking/rest/rooms?roomType="+this.refs.search.value).then((response)=>{
      console.log(response.data)
      this.setState({ 
      rooms:response.data });
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Manage the room types</h3>
          <Container>
            <Row>
            <Col md={4}>
              <div className="input-container">
                <i className="material-icons">search</i>
                <input type="text"
                      ref="search"
                      placeholder="type room type here"
                  />
                <button className="btn btn-primary"onClick={this.clicked}>Search</button> 
              </div> 
            </Col>
            <Col md={{  span:2 ,offset: 6 }}>
              <Link to={"/AddRoom"} className="btn btn-primary">Add Room</Link>
            </Col>
            </Row>
          </Container>
          <table className="table table-striped" variant="dark" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Room ID</th>
                <th>Room Type</th>
                <th>Price per Night</th>
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