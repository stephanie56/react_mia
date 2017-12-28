import React, { Component } from 'react';

class CountdownTimer extends Component {

  constructor(props){
    super(props);

    this._formatSeconds = this._formatSeconds.bind(this);
    this._addZero = this._addZero.bind(this);
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

  render() {
    return(
        <div className="clock__timer">
          <span>{ this._formatSeconds(this.props.setDuration * 60) }</span>
        </div>
    )
  };
}

export default CountdownTimer;
