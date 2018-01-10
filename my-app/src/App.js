import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React</h2>
        <MyComponent name='git'></MyComponent>
      </div>
    );
  }
}

export default App;
