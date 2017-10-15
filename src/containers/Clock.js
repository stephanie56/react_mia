import React, { Component } from 'react';

import { connect } from 'react-redux';

class Clock extends Component {

  constructor(props) {
    super(props);

    // binding methods to this
    this._convertToClockTime = this._convertToClockTime.bind(this);
    this._convertToDisplayedTime = this._convertToDisplayedTime.bind(this);
  }

  // method to convert workDuration / breakDuration to clockTime that includes Hours, Minutes and Seconds
  // expect to return an object of numbers with the keys: hours, minutes, and seconds
  _convertToClockTime(duration) {
    // convert duration to hours
    let totalSeconds = duration * 60;
    const timeObj = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    if (totalSeconds >= 3600) {
      timeObj.hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600;
    }
    else if (totalSeconds >= 60) {
      timeObj.minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60;
    }
    else {
      timeObj.seconds = totalSeconds;
    }
    return timeObj;
  }

  // method to convert clockTime to displayedTime that shows Hours, Minutes and Seconds
  // expect to return string "hh:mm:ss"
  _convertToDisplayedTime(val) {
    const obj = this._convertToClockTime(val);
    const displayedHours = obj.hours;
    const displayedMinutes = obj.minutes;
    const displayedSeconds = obj.seconds;
    return `${displayedHours} : ${displayedMinutes} : ${displayedSeconds}`;
  }

  render() {
    const clockTime = this._convertToDisplayedTime(this.props.workDuration);
    return(
      <div>
        <div>{ this.props.currentTask  }</div>
        <div>{ clockTime }</div>
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
