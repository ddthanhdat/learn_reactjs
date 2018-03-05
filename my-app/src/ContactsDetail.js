import React, { Component } from 'react';

class ContactsDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      contact: this.props.contact,
      edit: false
    }

    this.doubleclick = this.doubleclick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  doubleclick(){
    this.setState({edit: true});
  }
  handleOnChange(e){
    var newContact = this.state.contact;
    newContact.phone = e.target.value;
    this.setState({contact: newContact});
  }

  handleEnter(e){
    if(e.key === "Enter"){
      this.setState({edit: false});
    }
  }

  handleDelete(){
    this.props.deleteContact(this.state.contact.id);
    this.setState({edit: false});
  }

  render() {
    var item = this.state.contact;
    var el;
    if(this.state.edit){
      el = <input type="phone" class="form-control" value={item.phone} onChange={this.handleOnChange} onKeyDown={this.handleEnter}/>
    }else{
      el = <label onDoubleClick={this.doubleclick}>{item.phone} <button type="button" class="close" aria-label="Close" onClick={this.handleDelete}>
      <span aria-hidden="true">&times;</span>
    </button> </label>
    }
    var a = <form class="form-inline">
      <div class="form-group mb-2">
        <label>{item.name}</label>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        {el}
      </div>  
    </form>
    return (
      <li className='list-group-item' key={item.id}>{a}</li>
    )
  }
};

export default ContactsDetail;