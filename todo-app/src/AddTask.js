import React from 'react';
import Tasksdetail from './Tasks-detail';


class AddTask extends React.Component {
  constructor(props) {
    super(props);
    // this.updateTasks = this.updateTasks.bind(this);
    this.state = {
      name: ''
    };
  }

  onChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmit = (event) => { 
    event.preventDefault()
    this.props.addTasks(this.state.name)
    this.state.name = ''
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit} > {/* event submit will call fucntion onSubmit */}
          <label>Add todo: </label>
          <input value={this.state.name} onChange={this.onChange} className="form-control"/>
          <button className="btn btn-primary">Submit</button>
        </form>
        <br/>
      </div>
  )};
}

export default AddTask;