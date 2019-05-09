import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeRoomType = this.onChangeRoomType.bind(this);
    this.onChangePricePerNight = this.onChangePricePerNight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      roomType: '',
      price: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:8080/HotelBooking/rest/rooms/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                roomType: response.data.roomType, 
                price: response.data.price
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeRoomType(e) {
    this.setState({
      roomType: e.target.value
    });
  }
  onChangePricePerNight(e) {
    this.setState({
      price: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const rooms = {
      roomType: this.state.roomType,
      price: this.state.price
  
    };
    axios.put('http://localhost:8080/HotelBooking/rest/rooms/'+this.props.match.params.id, rooms)
        .then(res => console.log(res.data));
    this.props.history.push('/Rooms');
    window.location.reload();
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Rooms</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Room Type:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.roomType}
                      onChange={this.onChangeRoomType}
                      />
                </div>
                <div className="form-group">
                    <label>Price per Night: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePricePerNight}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Room" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}