import React from 'react';
import Tasksdetail from './Tasks-detail';
import AddTask from './AddTask';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.addTasks = this.addTasks.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.state = {
      i: 2,
      task: '',
      tasks: [ {
        task_id: 0,
        name: "demo"
      }, {
        task_id: 1,
        name: "demo1"
      }
    ]
    };

    this.getListTask();
  }

  getListTask(){
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            tasks: results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  addTasks(text) {
    var details = {
        'name': text
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
  
    fetch("http://localhost:3000/tasks", {
      method: 'POST',
      body: formBody,
      headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        var newTask = {
            task_id: result.task_id,
            name: result.name
          }

        var list = this.state.tasks;
        list = [newTask, ...list];
        this.setState({tasks: list});
      },
      (error) => {
        alert(error);
      }
    );
  }

  updateTasks(ob) {
    fetch("http://localhost:3000/tasks/"+ob.task_id, {
      method: 'PUT',
      body: 'name='+ob.name,
      headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        var newTask = {
            task_id: result.task_id,
            name: result.name
          }

          var newTasks = this.state.tasks;
          
          newTasks.map( function(item, index){
            if(newTask.task_id == item.task_id){
              item.name = newTask.name;
            }
          })
          this.setState({tasks: newTasks});
      },
      (error) => {
        alert(error);
      }
    );
    
  }

  onClickElem(item){
    this.setState({task: item});
  }

  removeElemll(item, index){
    fetch("http://localhost:3000/tasks/"+item.task_id, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(
      (result) => {
        // alert(result);
        this.setState({task: null})
      },
      (error) => {
        alert(error);
      }
    )
    var newTasks = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({tasks: newTasks})
  }

  render() {
    var items = this.state.tasks.map((item, index) => {
        return <li key={index} ><span onClick={this.onClickElem.bind(this, item)} >{item.name}</span> <button onClick={this.removeElemll.bind(this, item, index)}>X</button></li>
    });

    return (
      <div>
        <div className="row">
          <div className="col-5">
              <AddTask addTasks={this.addTasks}></AddTask>
          </div>
          <div className="col-7">
          { this.state.task &&
            <Tasksdetail task={this.state.task} updateTasks={this.updateTasks}></Tasksdetail>
          }
          </div>
        </div>
        
        <br/>
        <div className="row">
          <div className="col-5">
            <ul>
              {items}
            </ul>
          </div>
        </div>
        
      </div>
  )};
}

export default Tasks;