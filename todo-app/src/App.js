import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ['task 1', 'task 2']
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => { 
    event.preventDefault()
    this.setState({
      term: '',
      items: [this.state.term, ...this.state.items] // add top list
    });
  }

  render() {
    return (
      <div class="container">
        <form className="App" onSubmit={this.onSubmit} class=""> {/* event submit will call fucntion onSubmit */}
          <label>Add todo: </label>
          <input value={this.state.term} onChange={this.onChange} class="form-control"/>
          <button class="btn btn-primary">Submit</button>
        </form>
        <br/>
        <div class="row">
          <div class="col-5">
            <h2></h2>
            <List items={this.state.items} /> {/* show list item via List component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
