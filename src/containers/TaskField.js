import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskField extends Component {
  render() {
    return(
      <div className="TaskField">
        <form>
          <input type='text'/>
          <input type='submit' value='Add Task'/>
        </form>
        <p>{ this.props.message }</p>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  message: state.message
});
export default connect(mapStateToProps)(TaskField);
