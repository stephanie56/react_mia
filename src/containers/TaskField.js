import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions/actionCreator';

class TaskField extends Component {
  constructor(props){
    super(props);
    this.state={
      todo: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.addTask(this.state.todo);
    this.setState({todo: ''});
  }

  render() {
    return(
      <div className="TaskField">
        <form onSubmit={this.onFormSubmit}>
          <input type='text' placeholder="What is on your mind?" onChange={(e) => {this.setState({todo: e.target.value});}}/>
          <input type='submit' value='Add Task'/>
        </form>
        <p className="TaskField__message">{ this.props.message }</p>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  message: state.tasks.message
});

const mapDispatchtoProps = (dispatch) => ({
  addTask: (todo) => dispatch(addTask(todo))
});

export default connect(mapStateToProps, mapDispatchtoProps)(TaskField);
