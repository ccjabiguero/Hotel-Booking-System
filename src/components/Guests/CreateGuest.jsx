import React, { Component } from 'react';
import axios from 'axios'
export default class createGuest extends Component {
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
      console.log(`The values are ${this.state.firstName}, ${this.state.middleName}, ${this.state.lastName}and ${this.state.birthDate}`)
      const guests = {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        birthDate: this.state.birthDate
      };
      axios.post('http://localhost:8080/HotelBooking/rest/guests', guests)
      .then(res => console.log(res.data));
      this.setState({
            firstName: '',
            middleName: '',
            lastName:'',
            birthDate:''
      })
      this.props.history.push('/Guests');
      window.location.reload();
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Guest</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.firstName}
                               onChange={this.onChangeFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Middle Name: (Optional) </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.middleName}
                               onChange={this.onChangeMiddleName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Number: </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.lastName}
                               onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Birth Date: </label>
                        <input type="date" 
                               className="form-control"
                               value={this.state.birthDate}
                               onChange={this.onChangeBirthDate}/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="submit"  
                        value="Add Guest" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}