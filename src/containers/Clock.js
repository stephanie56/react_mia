import React, { Component } from 'react';

import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/actionCreator';


// import CountdownTimer from '../components/CountdownTimer';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state={
      currentDuration: this.props.workDuration,
      timeLeft: this.props.workDuration * 60,
      isTimerOn: true
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

  _formatSeconds(totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${this._addZero(hours)} : ${this._addZero(minutes)} : ${this._addZero(seconds)}`;
  }

  _addZero(number){
    return number > 9 ? "" + number : "0" + number;
  }

  componentDidMount(){

    let timer = setInterval(() => {
      this.setState({timeLeft: this.state.timeLeft - 1});
    }, 1000);

    if(this.state.timeLeft <= 0 || !this.state.isTimerOn ) {
      clearInterval(timer);
    }

  }

  render() {
    return(
      <div className="Clock">
        <div className="clock__activetask">{ this.props.activeTask  }</div>

        <div className="clock__timer">
          <span>{ this._formatSeconds(this.state.timeLeft) }</span>
        </div>

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
