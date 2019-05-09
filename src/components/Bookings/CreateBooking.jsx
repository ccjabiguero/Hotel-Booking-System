import React, { Component } from 'react';
import axios from 'axios'
export default class createBooking extends Component {
    constructor(props) {
        super(props);
        this.onChangeGuests = this.onChangeGuests.bind(this);
        this.onChangeRoomId = this.onChangeRoomId.bind(this);
        this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
        this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
        this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            guests: '',
            roomId: '',
            checkIn:'',
            checkOut:'',
            totalPrice:''
        }
    }
    onChangeGuests(e) {
      this.setState({
        guests: e.target.value
      });
    }
    onChangeRoomId(e) {
      this.setState({
        roomId: e.target.value
      })  
    }
    onChangeCheckIn(e) {
      this.setState({
        checkIn: e.target.value
      })
    }
    onChangeCheckOut(e) {
        this.setState({
          checkOut: e.target.value
        })
      }
    onChangeTotalPrice(e) {
        this.setState({
          totalPrice: e.target.value
        })
      }
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.guests}, ${this.state.roomId}, ${this.state.checkIn}and ${this.state.checkOut}`)
      const bookings = {
        guests: this.state.guests,
        roomId: this.state.roomId,
        checkIn: this.state.checkIn,
        checkOut: this.state.checkOut,
        totalPrice: this.state.totalPrice
      };
      axios.post('http://localhost:8080/HotelBooking/rest/bookings', bookings)
      .then(res => console.log(res.data));
      this.setState({
            guests: '',
            roomId: '',
            checkIn:'',
            checkOut:'',
            totalPrice:''
      })
      this.props.history.push('/Bookings');
      window.location.reload();
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Guests:  </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.guests}
                               onChange={this.onChangeGuests}/>
                    </div>
                    <div className="form-group">
                        <label>Room ID:</label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.roomId}
                               onChange={this.onChangeRoomId}/>
                    </div>
                    <div className="form-group">
                        <label>Check-In: </label>
                        <input type="date" 
                               className="form-control"
                               value={this.state.checkIn}
                               onChange={this.onChangeCheckIn}/>
                    </div>
                    <div className="form-group">
                        <label>Check-Out: </label>
                        <input type="date" 
                               className="form-control"
                               value={this.state.checkOut}
                               onChange={this.onChangeCheckOut}/>
                    </div>
                    <div className="form-group">
                        <label>Total Price: </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.totalPrice}
                               onChange={this.onChangeTotalPrice}/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="submit"  
                        value="Add Booking" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}