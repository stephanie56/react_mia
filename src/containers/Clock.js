import React, { Component } from 'react';

import { connect } from 'react-redux';

class Clock extends Component {
  render() {
    return(
      <div>
        <div>{ this.props.currentTask  }</div>
        <div>{ this.props.workDuration  }</div>
        <div>
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  currentTask: state.currentTask,
  workDuration: state.workDuration
});

export default connect(mapStateToProps)(Clock);
