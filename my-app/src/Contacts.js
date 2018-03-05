import React, { Component } from 'react';
import ContactsDetail from './ContactsDetail';
import AddContact from './AddContact';
class Contacts extends Component {

  constructor(props){
    super(props);

    var contacts = localStorage.getItem('contacts');

    contacts = (contacts != null ) ? JSON.parse(contacts) : [] ;

    this.state = {
      contacts: contacts
    }

    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  setLocalStorage(contacts){
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  handleAddContact(item){
    var contacts = this.state.contacts;
    contacts.push(item);

    this.setState({contacts});
    this.setLocalStorage(contacts);
  }

  handleDeleteContact(id){
    var oldcontacts =this.state.contacts;

    var contacts = oldcontacts.filter(contact => contact.id !== id);

    this.setState({contacts});
    this.setLocalStorage(contacts);

    
  }

  render() {
    var items = this.state.contacts.map((item)=>{
      return <ContactsDetail contact={item} key={item.id} deleteContact={this.handleDeleteContact}></ContactsDetail>
    });

    return (
       <div>
         <AddContact addContact={this.handleAddContact}></AddContact>
         <ul className="list-group">
           {items}
         </ul>
       </div>
    )
  }
};

export default Contacts;