import React, { Component } from 'react';

import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../action/actionCreator';


import CountdownTimer from '../components/CountdownTimer';

class Clock extends Component {

  render() {
    return(
      <div className="Clock">
        <div className="clock__activetask">{ this.props.activeTask  }</div>
        <CountdownTimer
          setDuration={ this.props.workDuration }
          isTimerOn={ this.props.isTimerOn }
        />
      <div className="clock__btn-group">
          <button className="clock__btn btn-dark"
            onClick={this.props.startTimer}
          ><i className="fa fa-play-circle"></i>Start</button>
          <button className="clock__btn btn-dark"
            onClick={this.props.stopTimer}
          ><i className="fa fa-stop-circle"></i>Stop</button>
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  activeTask: state.activeTask,
  isTimerOn: state.isTimerOn,
  workDuration: state.workDuration,
  breakDuration: state.breakDuration,
});

const mapDispatchtoProps = (dispatch) => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer())
})

export default connect(mapStateToProps, mapDispatchtoProps)(Clock);
