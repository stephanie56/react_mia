import React, { Component } from 'react';

class TaskField extends Component {
  render() {
    return(
      <div>
        <form>
          <input type='text'/>
          <input type='submit' value='Add Task'/>
        </form>
        <p>{ this.props.message }</p>
      </div>
    )
  };
}

export default TaskField;
