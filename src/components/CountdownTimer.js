import React, { Component } from 'react';

class CountdownTimer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timeToCount: 0
    }
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

  render() {
    return(
        <div>
          <span>{ this.state.timeToCount }</span>
        </div>
    )
  };
}

export default CountdownTimer;
