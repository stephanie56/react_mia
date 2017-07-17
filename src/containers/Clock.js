import React, { Component } from 'react';

import { connect } from 'react-redux';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      clockTime: this.props.workDuration * 60
    }
    this._countDown = this._countDown.bind(this);
  }

  componentDidMount() {
    const thiz = this
    var time = thiz.state.clockTime;
    var newClockTime = thiz._countDown(time);
      setInterval(function(){
        thiz.setState(
          {clockTime: newClockTime}
        )
      }, 1000);
  }

  _countDown(time){
    const timeLeft = time > 0 ? (time - 1) : time;
    return timeLeft;
  }

  render() {
    return(
      <div>
        <div>{ this.props.currentTask  }</div>
        <div>{ this.state.clockTime }</div>
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
  workDuration: state.workDuration,
  breakDuration: state.breakDuration,
});

export default connect(mapStateToProps)(Clock);
