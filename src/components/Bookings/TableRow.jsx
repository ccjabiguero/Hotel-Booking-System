import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8080/HotelBooking/rest/bookings/'+this.props.booking.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload();
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.booking.id}
          </td>
          <td>
            {this.props.booking.guests}
          </td>
          <td>
            {this.props.booking.roomId}
          </td>
          <td>
            {this.props.booking.checkIn}
          </td>
          <td>
            {this.props.booking.checkOut}
          </td>
          <td>
            {this.props.booking.totalPrice}
          </td>
          <td>
            <Link to={"/EditBooking/"+this.props.booking.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;