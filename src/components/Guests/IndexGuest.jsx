import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow.jsx';
import {Container, Row, Col} from 'react-bootstrap'
import Select from 'react-select'
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {guests: []};
    }
    componentDidMount(){
      this._refresh();
      this.refs.searchFirstName.focus();
    }
    tabRow(){
      return this.state.guests.map(function(guest, i){
          return <TableRow guest={guest} key={i} />;
      });
    }
    _refresh(){
        axios.get('http://localhost:8080/HotelBooking/rest/guests')
        .then(response => {
          this.setState({ guests: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        
    }
    clicked = () => {
      if(this.refs.searchFirstName!=null || this.refs.searchLastName != null){
        axios.get("http://localhost:8080/HotelBooking/rest/guests?firstName="+this.refs.searchFirstName.value
        +"&lastName="+this.refs.searchLastName.value).then((response)=>{
          console.log(response.data)
          this.setState({ 
          guests:response.data });
      });
      }
    }

    render() {

      return (
        <div>
          <h3 align="center">Guest List</h3>
          <Container>
            <Row>
            <Col md={4}>
              <div className="input-container">
                <i className="material-icons">search</i>
                <input type="text"
                      ref="searchFirstName"
                      placeholder="First Name"
                  />
                <input type="text"
                      ref="searchLastName"
                      placeholder="Last Name"
                  />
                <button className="btn btn-primary"onClick={this.clicked}>Search</button> 
              </div>
            </Col>
            <Col md={{offset: 5}}>
              <Link to={"/AddGuest"} className="btn btn-primary">Add Guest</Link>
            </Col>
            </Row>
          </Container>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Guest ID</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
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