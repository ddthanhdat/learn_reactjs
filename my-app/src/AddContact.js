import React, { Component } from 'react';
import './addcontact.css';
class AddContact extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: '',
        phone: ''
      }

    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangePhone = this.handleOnChangePhone.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  

  handleOnChangeName(e){
    this.setState({name: e.target.value});
  }
  handleOnChangePhone(e){
    this.setState({phone: e.target.value});
  }

  handleOnSubmit(e){
    e.preventDefault();

    var newContact = {
      id: new Date(),
      name: this.state.name,
      phone: this.state.phone
    }

    this.props.addContact(newContact);

    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
    return (
       <div className='addcontact'>
         <form onSubmit={this.handleOnSubmit} className='form'>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" class="form-control"  value={this.state.name} onChange={this.handleOnChangeName} placeholder="Enter Name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone</label>
            <input type="phone" class="form-control" value={this.state.phone} onChange={this.handleOnChangePhone} placeholder="Enter Phone"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       </div>

       
    )
  }
};

export default AddContact;