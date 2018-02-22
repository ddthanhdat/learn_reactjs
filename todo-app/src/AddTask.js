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
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.addTasks(this.state.name)
      this.setState({name: ''})
      
    }
  }

  render() {
    return (
      <div>
        <form className="App" onKeyPress={this.onSubmit} > {/* event submit will call fucntion onSubmit */}
          <label>Add todo: </label>
          <input value={this.state.name} onChange={this.onChange} className="form-control"/>
        </form>
        <br/>
      </div>
  )};
}

export default AddTask;