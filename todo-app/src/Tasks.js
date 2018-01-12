import React from 'react';
import Tasksdetail from './Tasks-detail';
import AddTask from './AddTask';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.addTasks = this.addTasks.bind(this); // cho nó có thể giao tiếp được với cha và con
    this.updateTasks = this.updateTasks.bind(this); // cho nó có thể giao tiếp được với cha và con
    this.state = {
      task: 'demo',
      tasks: ['task 1', 'task 2'],
    };
  }

  addTasks(text) {
    var list = this.state.tasks;
    list.push(text);
    this.setState({tasks: list});
  }
  updateTasks(text) {
    var list = this.state.tasks;
    list.push(text);
    this.setState({tasks: list});
  }
  onClickElem(item, e){
    this.setState({task: item});
  }

  removeElemll(elem){
    var list = this.state.tasks;
    var value = elem.target.parentNode.parentNode.querySelector('span').innerText;
    console.log(value);
    //this.state.tasks;
  }

  render() {
    var items = this.state.tasks.map((elem, i) => {
        let boundItemClick = this.onClickElem.bind(this, elem);
        return <li key={i} ><span onClick={boundItemClick}>{elem}</span> <button onClick={this.removeElemll.bind(this)}>X</button></li>
    });
    return (
      <div>
        
        <AddTask addTasks={this.addTasks}></AddTask>
        <br/>
        <div className="row">
          <div className="col-5">
            <ul>
              {items}
            </ul>
          </div>
        </div>
        <Tasksdetail task={this.state.task} updateTasks={this.updateTasks}></Tasksdetail>
      </div>
  )};
}

export default Tasks;