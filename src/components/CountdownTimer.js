import React, { Component } from 'react';

class CountdownTimer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timeToCount: 0
    }

    this._formatSeconds = this._formatSeconds.bind(this);
    this._addZero = this._addZero.bind(this);
  }

  componentWillMount(){
    const then = Date.now() + this.props.setDuration * 60 * 1000;
    this.setState({
      timeToCount: Math.round((then - Date.now()) / 1000)
    });
  }

  componentDidMount(){
    let timeLeft = this.state.timeToCount;
    let timer = setInterval(function(){
      console.log(Math.round((60 - Date.now()) / 1000));
    }, 1000);
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
          <span>{ this._formatSeconds(this.state.timeToCount) }</span>
        </div>
    )
  };
}

export default CountdownTimer;
