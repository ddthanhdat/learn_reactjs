import React, { Component } from 'react';
import Tasks from './Tasks';
import './App.css';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: ['task 1', 'task 2']
      };
    }

  

  render() {
    return (
      <div className="container">
        <Tasks></Tasks>
      </div>
    );
  }
}

export default App;
