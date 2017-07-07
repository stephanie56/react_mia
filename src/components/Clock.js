import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return(
      <div>
        <div>{ this.props.currentTask  }</div>
        <div>{ this.props.timeLeft  }</div>
        <div>
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    )
  };
}

export default Clock;
