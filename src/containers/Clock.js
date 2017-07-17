import React, { Component } from 'react';

import { connect } from 'react-redux';

class Clock extends Component {

  constructor(props) {
    super(props);

    // binding methods to this
    this._convertToClockTime = this._convertToClockTime.bind(this);
  }

  // method to convert workDuration / breakDuration to clockTime that includes Hours, Minutes and Seconds
  // expect to return an object of numbers with the keys: hours, minutes, and seconds
  _convertToClockTime(duration) {
    // convert duration to hours
    const hours = duration >= 60 ? (Math.floor(duration / 60)) : (0);
    const minutes = totalSeconds >= 60 ? (totalSeconds / 60) : ("00");
    const seconds = "00" ;
  }

  // method to convert clockTime to displayedTime that shows Hours, Minutes and Seconds
  // expect to return string "hh:mm:ss"
  _convertToDisplayedTime(duration) {
    const displayedHours = totalSeconds >= 3600 ? (totalSeconds / 3600) : ("00");
    const displayedMinutes = totalSeconds >= 60 ? (totalSeconds / 60) : ("00");
    const displayedSeconds = "00" ;

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
