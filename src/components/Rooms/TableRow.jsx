import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8080/HotelBooking/rest/rooms/'+this.props.room.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload();
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.room.id}
          </td>
          <td>
            {this.props.room.roomType}
          </td>
          <td>
            {this.props.room.price}
          </td>
          <td>
            <Link to={"/EditRoom/"+this.props.room.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;