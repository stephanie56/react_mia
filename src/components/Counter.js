import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return(
        <div className="counter">
          <span className="counter__name">{ this.props.name }</span>
          <button
            onClick={() => this.props.onIncrement()}
          >+</button>
        <span className="counter__number">{ this.props.count }</span>
          <button
            onClick={() => this.props.onDecrement()}
          >-</button>
        </div>
    )
  };
}

export default Counter;
