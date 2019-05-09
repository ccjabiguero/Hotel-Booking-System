import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      middleName: '',
      lastName:'',
      birthDate:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:8080/HotelBooking/rest/guests/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                firstName: response.data.firstName, 
                middleName: response.data.middleName,
                lastName: response.data.lastName,
                birthDate: response.data.birthDate
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeMiddleName(e) {
    this.setState({
      middleName: e.target.value
    })  
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }
  onChangeBirthDate(e) {
    this.setState({
      birthDate: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const guests = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      birthDate: this.state.birthDate
    };
    axios.put('http://localhost:8080/HotelBooking/rest/guests/'+this.props.match.params.id, guests)
        .then(res => console.log(res.data));
    this.props.history.push('/Guests');
    window.location.reload();
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Guests</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.firstName}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Middle Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.middleName}
                      onChange={this.onChangeMiddleName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Birth Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.birthDate}
                      onChange={this.onChangeBirthDate}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Guest" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}