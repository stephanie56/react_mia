import React, { Component } from 'react';

import { connect } from 'react-redux';

import CountdownTimer from '../components/CountdownTimer';

class Clock extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="Clock">
        <div className="clock__activetask">{ this.props.activeTask  }</div>
        <CountdownTimer
          setDuration={ this.props.workDuration }
        />
      <div className="clock__btn-group">
          <button className="clock__btn btn-dark"><i className="fa fa-play-circle"></i>Start</button>
          <button className="clock__btn btn-dark"><i className="fa fa-stop-circle"></i>Stop</button>
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  activeTask: state.activeTask,
  workDuration: state.workDuration,
  breakDuration: state.breakDuration,
});

export default connect(mapStateToProps)(Clock);
