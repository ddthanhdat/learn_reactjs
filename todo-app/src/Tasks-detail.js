import React from 'react';

class Tasksdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    };
  }

  onChange = (event) => {
    // this.setState({name: event.target.value});
    
  }

  
  
  render() {
    return (
      <div>
        Taskdetail:

        name: <input type="text" value={this.props.task} onChange={this.onChange} />
      </div>
    )};
};

export default Tasksdetail;