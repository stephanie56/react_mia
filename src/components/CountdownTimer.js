import React, { Component } from 'react';

class CountdownTimer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timeToCount: 0,
    }

    this._formatSeconds = this._formatSeconds.bind(this);
    this._addZero = this._addZero.bind(this);
  }

  // fetch setDuration for countdown task
  componentWillMount(){
    // const then = Date.now() + this.props.setDuration * 60 * 1000;
    this.setState({
      timeToCount: this.props.setDuration * 60
    });
  }

  // start countdown
  componentDidMount(){
      const that = this;

      var timer = setInterval(function(){
      if(that.state.timeToCount > 0 && that.props.isTimerOn){
        that.setState({
          timeToCount: that.state.timeToCount - 1
        });
      }
      else if(that.state.timeToCount > 0 && !that.props.isTimerOn){
        clearInterval(timer);
        console.log('stopped the timer');
      }
      else {
        that.setState({
          timeToCount: that.props.setDuration * 60
        });
        console.log("round 2!");
      }
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
