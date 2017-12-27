import React, { Component } from 'react';

import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../action/actionCreator';


import CountdownTimer from '../components/CountdownTimer';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state={
      currentDuration: this.props.workDuration,
      isTimerOn: false
    }
    this._startTimer=this._startTimer.bind(this);
    this._stopTimer=this._stopTimer.bind(this);
  }

  _startTimer(){
    console.log('start timer');
    this.setState({
      isTimerOn: true
    });
  }

  _stopTimer(){
    console.log('stop timer');
    this.setState({
      isTimerOn: false
    });
  }

  render() {
    return(
      <div className="Clock">
        <div className="clock__activetask">{ this.props.activeTask  }</div>

        <CountdownTimer
          setDuration={ this.state.currentDuration }
          isTimerOn={ this.state.isTimerOn }
        />

    <div className="clock__btn-group">
          <button className="clock__btn btn-dark"
            onClick={this._startTimer}
          ><i className="fa fa-play-circle"></i>Start</button>
          <button className="clock__btn btn-dark"
            onClick={this._stopTimer}
          ><i className="fa fa-stop-circle"></i>Stop</button>
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  activeTask: state.tasks.activeTask,
  isTimerOn: state.isTimerOn,
  workDuration: state.durations.workTime,
  breakDuration: state.durations.breakTime,
});

const mapDispatchtoProps = (dispatch) => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer())
})

export default connect(mapStateToProps, mapDispatchtoProps)(Clock);
