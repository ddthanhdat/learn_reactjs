import React, { Component } from 'react';

// class MyComponent extends Component {
//   render() {
//     return (
//        <div>Hello World!</div>
//     )
//   }
// };

const MyComponent = (props) => (
    <div>Hello {props.name}!</div>
  );

export default MyComponent;