import React, { Component } from 'react';
import { Alert,Card, Button,Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react'
class Home extends Component {
  state = {
    //defauilt value of the date time
    date: '',
  };
  componentDidMount() {
    var date = new Date().getDate();var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year
    });
  }
  render() {
    
    return (
      
      <Container>
        <Alert variant="success" className="alertsize">
  <Alert.Heading>Welcome to Blue Hotel!</Alert.Heading>
  <p>
    Aww yeah, you successfully log-in as an admin in this Admin panel. 
    This is created for the Case Study which is Hotel Booking System. 
    <p>Administrator can manage room types, hotel rates and booking options. </p>
  </p>
  <hr />
  <p className="mb-0">
    Today is {this.state.date}
  </p> 
</Alert>

      <Row>
      <Col md={{span:1}}>
      <Card bg="danger" text="white" style={{ width: '18rem' }}>
    <Card.Header align="center"><MaterialIcon  icon="book" size='100px'color='#ffffff'/></Card.Header>
    <Card.Body>
      <Card.Title>Bookings</Card.Title>
      <Card.Text>
        
          <li>Book guests to a room so that the hotel can generate revenue.</li>
          <li>Update [room and date(s) of stay] of a guest’s booking that can accommodate changes in a guest’s stay. </li>
        
          <Button variant="outline-light" href="/Bookings">BOOK A ROOM</Button>
      </Card.Text>
    </Card.Body>
    </Card>
    
    </Col>
    <Col md={{span:1,offset:3}} >
    <Card bg="warning" text="white" style={{ width: '18rem' }}>
    <Card.Header align="center"><MaterialIcon  icon="vpn_key" size='100px'color='#ffffff'/></Card.Header>
    <Card.Body>
      <Card.Title>Rooms</Card.Title>
      <Card.Text>
        
          <li>Add room type to the system.</li>
          <li>Search rooms based on room type that can check for available rooms.</li>
          <p>  &nbsp;</p>
        
          <Button variant="outline-light" href="/Rooms">Manage Room Types</Button>
      </Card.Text>
    </Card.Body>
    </Card>
    </Col>
      <Col md={{span:1,offset:3}}>
    <Card bg="info" text="white" style={{ width: '18rem' }}>
    <Card.Header align="center"><MaterialIcon  icon="persons" size='100px'color='#ffffff'/></Card.Header>
    <Card.Body>
      <Card.Title>Guests</Card.Title>
      <Card.Text>
        
          <li>Add guest details to the system that can improve guest relations.</li>
          <li>Search guests based on First Name and Last Name that can check on the guest’s stay at the hotel.</li>
        
          <Button variant="outline-light" href="/Guests">View details...</Button>
      </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    );
  }
}

export default Home;
