import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8080/HotelBooking/rest/guests/'+this.props.guest.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload();
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.guest.id}
          </td>
          <td>
            {this.props.guest.firstName}
          </td>
          <td>
            {this.props.guest.middleName}
          </td>
          <td>
            {this.props.guest.lastName}
          </td>
          <td>
            {this.props.guest.birthDate}
          </td>
          <td>
            <Link to={"/EditGuest/"+this.props.guest.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;