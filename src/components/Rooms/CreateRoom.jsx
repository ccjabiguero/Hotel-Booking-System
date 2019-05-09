import React, { Component } from 'react';
import axios from 'axios'
export default class Create extends Component {
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
      console.log(`The values are ${this.state.roomType}, ${this.state.price}`)
      const rooms = {
        roomType: this.state.roomType,
        price: this.state.price,
      };
      axios.post('http://localhost:8080/HotelBooking/rest/rooms', rooms)
      .then(res => console.log(res.data));
      this.setState({
            roomType: '',
            price: ''
      })
      this.props.history.push('/Rooms');
      window.location.reload();
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room Type:  </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.roomType}
                               onChange={this.onChangeRoomType}/>
                    </div>
                    <div className="form-group">
                        <label>Price per Night: </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.price}
                               onChange={this.onChangePricePerNight}/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="submit"  
                        value="Add Room" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}