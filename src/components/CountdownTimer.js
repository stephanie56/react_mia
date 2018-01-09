import React, { Component } from 'react';

class CountdownTimer extends Component {

  constructor(props){
    super(props);

    this.state={
      timeLeft: this.props.setDuration * 60
    }

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

  componentDidMount(){

    setInterval(() => {
      this.setState({timeLeft: this.state.timeLeft - 1});
      console.log(this.state.timeLeft);
    }, 1000);
    
  }

  render() {
    return(
        <div className="clock__timer">
          <span>{ this._formatSeconds(this.state.timeLeft) }</span>
        </div>
    )
  };
}

export default CountdownTimer;
