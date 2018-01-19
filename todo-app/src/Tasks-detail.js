import React from 'react';

class Tasksdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    };
  }

  onChange = (event) => {
    var newTask = this.state.task;
    newTask.name = event.target.value;
    this.setState({task: newTask});
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.task !== nextProps.task) {
      this.setState({task: nextProps.task});
    }
  }
  update(){
    this.props.updateTasks(this.state.task);
  }
  
  render() {
    return (
      <div>
        
        <h2>Taskdetail:</h2>
        
        id: {this.state.task.task_id} <br/>

        name: <input type="text" value={this.state.task.name} onChange={this.onChange} />
        <button onClick={this.update.bind(this)}>Update</button>
      </div>
    )};
};

export default Tasksdetail;